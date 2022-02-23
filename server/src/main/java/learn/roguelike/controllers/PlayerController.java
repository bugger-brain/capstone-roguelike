package learn.roguelike.controllers;

import learn.roguelike.domain.Result;
import learn.roguelike.domain.PlayerService;
import learn.roguelike.domain.ResultType;
import learn.roguelike.models.Player;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    private final PlayerService service;

    public PlayerController(PlayerService service){
        this.service = service;
    }

    @GetMapping
    public List<Player> getPlayers(){
        List<Player> players = service.findAll();
        return players;
    }

    @GetMapping("/{username}")
    public ResponseEntity<Player> getPlayerByUsername(@PathVariable String username) {
        Player player = service.findPlayerByUsername(username);
        if (player == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(player);
    }
    @PostMapping
    public ResponseEntity<Object> post(@RequestBody Player player, BindingResult bindingResult,
                                            ServletRequest request){

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Player> result = service.addPlayer(player);
        if (result.isSuccess()) {

            String url = String.format("http://%s:%s/api/player/%s",
                    request.getServerName(),
                    request.getServerPort(),
                    player.getUsername()); //playerId ?? ugh

            return ResponseEntity.created(URI.create(url))
                    .body(player);
        }
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);

    }

    @PutMapping("/edit/{username}")
    public ResponseEntity<Object> put(@PathVariable String username,
                                      @RequestBody @Valid Player player,
                                      BindingResult bindingResult) {
        //change to String validation
        if (player == null || player.getUsername() != username) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<Object>(makeResult(bindingResult), HttpStatus.BAD_REQUEST);
        }

        Result<Void> result = service.update(player);
        switch (result.getType()) {
            case SUCCESS:
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            case NOT_FOUND:
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            default:
                return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> delete(@PathVariable String username) {
        boolean success = service.deleteByUsername(username);
        if (success) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private Result<Void> makeResult(BindingResult bindingResult) {
        Result<Void> result = new Result<>();
        for (ObjectError err : bindingResult.getAllErrors()) {
            result.addMessage(err.getDefaultMessage(), ResultType.INVALID);
        }
        return result;
    }

}