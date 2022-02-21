package learn.roguelike.data;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class HeroRepositoryTest {
    @Autowired
    HeroRepository repository;

    @Test
    void shouldFindHeroes(){
        var games = repository.findAll();
        assertTrue(games != null & games.size() > 0);
    }
}
