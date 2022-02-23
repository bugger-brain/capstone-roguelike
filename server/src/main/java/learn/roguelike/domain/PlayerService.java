package learn.roguelike.domain;

import learn.roguelike.data.PlayerRepository;
import learn.roguelike.models.Player;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository repository;

    public PlayerService(PlayerRepository repository){
        this.repository = repository;
    }

    public List<Player> findAll(){
        return repository.findAll();
    }

    public Player findPlayerByUsername(String username) {
        Player player = repository.findPlayerByUsername(username);
        return player;
    }
//just add or addPlayer
    public Result<Player> addPlayer(Player player){
        Result<Player> result = validate(player);
        if(!result.isSuccess()){
            return result;
        }

        player = repository.save(player);
        result.setPayload(player);
        return result;

    }
    //do we want to return void or Player
    public Result<Void> update(Player player){
        Result<Void> result = validate(player);
        if(!result.isSuccess()){
            return result;
        }

        if(findPlayerByUsername(player.getUsername()) !=null){
            repository.save(player);
            return result;
        }
        result.addMessage("player not found", ResultType.INVALID);
        return result;
    }

    public boolean deleteByUsername(String username){
        Player player = findPlayerByUsername(username);
        if(player !=null){
            repository.deleteById(player.getPlayerId());
            return true;
        }
        return false;
    }
    private <T> Result<T> validate(Player player){
        Result<T> result = new Result<>();
        return result;
    }

    
}
