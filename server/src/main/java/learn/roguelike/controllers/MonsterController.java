package learn.roguelike.controllers;

import learn.roguelike.domain.MonsterService;
import learn.roguelike.models.Monster;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rl/monster")
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
