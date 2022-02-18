import org.springframework.data.jpa.repository.JpaRepository;

public interface HeroRepository extends JpaRepository<Hero, Integer> {

    Hero findByHeroId(int id);
<<<<<<< HEAD
}
=======
}
>>>>>>> 01f3d5d1c2c3561fb07d2f73ed05494d9c80a690
