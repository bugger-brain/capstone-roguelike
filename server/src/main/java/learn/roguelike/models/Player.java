package learn.roguelike.models;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int playerId;
    private String username;
    private String password;

    @OneToMany
    private List<Game> games = new ArrayList<>();

}
