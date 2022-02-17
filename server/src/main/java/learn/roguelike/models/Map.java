package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;
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

//    @OneToMany(mappedBy = "tile")
    @OneToMany
    private List<Tile> tiles = new ArrayList<>();
}
