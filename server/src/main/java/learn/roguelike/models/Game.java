package learn.roguelike.models;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Data
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gameId;
    private boolean isBlueprint;
    private int score;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "game_id")
    private List<Map> maps = new ArrayList<>();

}
