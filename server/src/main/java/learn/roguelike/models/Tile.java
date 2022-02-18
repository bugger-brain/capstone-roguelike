package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Tile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tileId;
    private String type;
    private int x;
    private int y;
//    private boolean hasEntity;

}
