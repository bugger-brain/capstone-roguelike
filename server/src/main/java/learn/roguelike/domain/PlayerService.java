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

    public Player findByUsername(String username) {
        return repository.findByUsername(username).or
    }

    
}
