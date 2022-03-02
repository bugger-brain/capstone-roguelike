package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Map {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mapId;

    private int x;
    private int y;
<<<<<<< HEAD
=======
    @Column(name="game_id")
    private int gameId;
>>>>>>> bcedbc1313d0d2109e8819680b91a280c811f885

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "map_id")
    private List<Tile> tiles = new ArrayList<>();
}
