package learn.roguelike.domain;

import learn.roguelike.data.GameRepository;
import learn.roguelike.models.Game;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository repository;

    public GameService(GameRepository repository) {
        this.repository = repository;
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game findById(int gameId){ return repository.findById(gameId).orElse(null);
    }
}
