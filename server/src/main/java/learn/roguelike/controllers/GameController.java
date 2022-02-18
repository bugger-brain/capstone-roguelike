package learn.roguelike.controllers;

<<<<<<< HEAD
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/game")
public class GameController {


=======
import learn.roguelike.domain.GameService;
import learn.roguelike.models.Game;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rl/game")
//@ConditionalOnWebApplication
public class GameController {

    private final GameService service;

    public GameController(GameService service) {
        this.service = service;
    }

    @GetMapping
    public List<Game> getGames(){
        return service.findAll();
    }
>>>>>>> 01f3d5d1c2c3561fb07d2f73ed05494d9c80a690


}
