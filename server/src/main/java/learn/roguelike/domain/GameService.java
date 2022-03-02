package learn.roguelike.domain;

import learn.roguelike.data.GameRepository;
import learn.roguelike.models.Game;
import learn.roguelike.models.Player;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.List;
import java.util.Set;

@Service
public class GameService {

    private final GameRepository repository;

    public GameService(GameRepository repository) {
        this.repository = repository;
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game findById(int gameId){
        Game game = repository.findById(gameId).orElse(null);
        return game;
    }

    public Result<Game> add(Game game){
        Result<Game> result = validate(game);
        if(!result.isSuccess()){
            return result;
        }
        game = repository.save(game);
        result.setPayload(game);
        return result;

    }

    public Result<Void> update(Game game){
        Result<Void> result = validate(game);
        if(!result.isSuccess()){
            return result;
        }
        if(findById(game.getGameId()) !=null){
            repository.save(game);
            return result;
        }
        result.addMessage("game not found", ResultType.INVALID);
        return result;
    }

    public boolean deleteById(int gameId){
        Game game = findById(gameId);
        if(game !=null){
            repository.deleteById(game.getGameId());
            return true;
        }
        return false;
    }

    private <T> Result<T> validate(Game game){
        Result<T> result = new Result<>();
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<Game>> violations = validator.validate(game);

        if (!violations.isEmpty()) {
            for (ConstraintViolation<Game> violation : violations) {
                result.addMessage(violation.getMessage(), ResultType.INVALID);
            }
        }
        return result;
    }


}
