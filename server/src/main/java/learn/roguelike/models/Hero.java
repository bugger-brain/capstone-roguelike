package learn.roguelike.models;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Hero {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int heroId;
    private int tileId;
    private int hp;
    private int lives;
    private boolean air;
    private boolean water;
    private boolean earth;
    private boolean fire;
    private int keys;
    private int gold;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "tileId")
//    private Tile tile;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "elementId")
//    private Element element;
//
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "inventoryId")
//    private Inventory inventory;

}
