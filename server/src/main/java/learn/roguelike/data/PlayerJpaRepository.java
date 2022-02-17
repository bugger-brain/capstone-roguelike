package learn.roguelike.data;

import learn.roguelike.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerJpaRepository extends JpaRepository<Player, Integer> {
}
