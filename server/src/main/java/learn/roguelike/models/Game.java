package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameId;
    private Integer playerId;
    private boolean isBlueprint;

    @OneToMany
    private List<Map> maps = new ArrayList<>();

//    @ManyToOne
//    private Player player;

}
