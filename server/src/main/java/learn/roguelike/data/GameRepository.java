package learn.roguelike.data;

import learn.roguelike.models.Game;
import learn.roguelike.models.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Integer> {

}
