package learn.roguelike.data;

import learn.roguelike.models.Monster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonsterJpaRepository extends JpaRepository<Monster, Integer> {
}
