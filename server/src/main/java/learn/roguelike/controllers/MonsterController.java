package learn.roguelike.controllers;

<<<<<<< HEAD
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
=======
import learn.roguelike.domain.MonsterService;
import learn.roguelike.models.Monster;
import org.springframework.web.bind.annotation.GetMapping;
>>>>>>> 01f3d5d1c2c3561fb07d2f73ed05494d9c80a690
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
<<<<<<< HEAD
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/monster")
@ConditionalOnWebApplication
=======
@RequestMapping("/rl/monster")
>>>>>>> 01f3d5d1c2c3561fb07d2f73ed05494d9c80a690
public class MonsterController {

    private final MonsterService service;

    public MonsterController(MonsterService service) {
        this.service = service;
    }

    @GetMapping
    public List<Monster> getMonsters() {
        return service.findAll();
    }

}
