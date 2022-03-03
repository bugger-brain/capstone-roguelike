package learn.roguelike.domain;

import learn.roguelike.data.GameRepository;
import learn.roguelike.data.HeroRepository;
import learn.roguelike.data.MapRepository;
import learn.roguelike.data.TileRepository;
import learn.roguelike.models.Game;
import learn.roguelike.models.Hero;
import learn.roguelike.models.Map;
import learn.roguelike.models.Tile;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.List;
import java.util.Set;

@Service
public class GameService {

    private final GameRepository repository;
    private final MapRepository mapRepository;
    private final TileRepository tileRepository;
    private final HeroRepository heroRepository;

    public GameService(GameRepository repository, MapRepository mapRepository, TileRepository tileRepository, HeroRepository heroRepository) {
        this.repository = repository;
        this.mapRepository = mapRepository;
        this.tileRepository = tileRepository;
        this.heroRepository = heroRepository;
    }

    public List<Game> findAll() {
        return repository.findAll();
    }

<<<<<<< HEAD
    public Game findById(int gameId){
        Game game = repository.findById(gameId).orElse(null);
        return game;
=======
    public Game findById(int gameId){ return repository.findByGameId(gameId);
>>>>>>> c073e330e114d9d7aa847d5c69b1815fdf1c7e35
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
    public Result<Game> createNewGame(Game game){
        Result<Game> result = validate(game);
        Game defaultGame = findById(1);
        if(!result.isSuccess()){
            return null;
        }

        game = repository.save(game);
        result.setPayload(game);
        List<Map> defaultMaps=defaultGame.getMaps();
        Map map = new Map();
        //if(result.isSuccess()) {
            for (int i = 0; i < defaultMaps.size(); i++) {
                map.setGameId(game.getGameId());
                map.setX(defaultMaps.get(i).getX());
                map.setY(defaultMaps.get(i).getY());
                map = mapRepository.save(map);
                System.out.println(map.getMapId());
            }
       // }
        Tile tile = new Tile();
        for(int i = 0; i < defaultMaps.size(); i++){
            for(int k = 0; k < defaultMaps.get(i).getTiles().size(); k++){
                Tile temp = defaultMaps.get(i).getTiles().get(k);
                tile.setType(temp.getType());
                tile.setMapId(map.getMapId());
                tile.setX(temp.getX());
                tile.setY(temp.getY());
                tile = tileRepository.save(tile);
                System.out.print(tile.getTileId());
            }
        }

        Hero hero = new Hero();

        hero.setGameId(game.getGameId());
        hero.setHp(500);
        hero.setLives(3);
        hero.setAir(false);
        hero.setWater(false);
        hero.setEarth(false);
        hero.setFire(false);
        hero.setTile(game.getMaps().get(0).getTiles().get(0));

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
