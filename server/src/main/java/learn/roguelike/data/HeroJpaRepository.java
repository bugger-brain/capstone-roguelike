package learn.roguelike.data;

import learn.roguelike.models.Hero;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroJpaRepository extends JpaRepository<Hero, Integer> {
}
