package learn.roguelike.domain;

import learn.roguelike.data.PlayerRepository;
import learn.roguelike.models.Player;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
public class PlayerServiceTest {

    @Autowired
    PlayerService service;

    @MockBean
    PlayerRepository repository;

    @Test
    void shouldFindPogoto() {
        Player expected = makePlayer();
        when(repository.findPlayerByUsername("pogoto")).thenReturn(expected);
        Player actual = service.findPlayerByUsername("pogoto");
        assertEquals(expected, actual);
    }

    @Test
    void shouldAdd(){
        Player player = new Player();
        player.setPlayerId(0);
        player.setUsername("TEST");
        player.setPassword("test");

        Player mockOut = new Player();
        mockOut.setPlayerId(5);
        mockOut.setUsername("TEST");
        mockOut.setPassword("test");

        when(repository.save(player)).thenReturn(mockOut);

        Result<Player> actual = service.add(player);
        assertEquals(ResultType.SUCCESS, actual.getType());
        assertEquals(mockOut, actual.getPayload());
    }

    @Test
    void shouldNotAddWhenInvalid(){
        Player player = makePlayer();
        Result<Player> result = service.add(player);
        assertEquals(ResultType.INVALID, result.getType());

        player.setUsername(null);
        result = service.add(player);
        assertEquals(ResultType.INVALID, result.getType());
    }

    @Test
    void shouldUpdate(){
        Player player = new Player();
        player.setPlayerId(5);
        player.setUsername("TEST");
        player.setPassword("test");

        

    }

    Player makePlayer(){
        //(1, 'pagoto', 'qwe123')
        Player player = new Player();
        player.setPlayerId(1);
        player.setUsername("pagoto");
        player.setPassword("qwe123");

        return player;
    }
}