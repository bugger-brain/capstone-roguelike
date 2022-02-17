package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Monster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int monsterId;
    private int tileId;
    private int hp;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "tileId")
//    private Tile tile;

}
