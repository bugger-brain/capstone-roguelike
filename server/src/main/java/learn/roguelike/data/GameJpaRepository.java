package learn.roguelike.data;

import learn.roguelike.models.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameJpaRepository extends JpaRepository<Game, Integer> {
}
