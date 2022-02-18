package learn.roguelike.controllers;

import learn.roguelike.domain.HeroService;
import learn.roguelike.models.Hero;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rl/hero")
public class HeroController {

    private final HeroService service;

    public HeroController(HeroService service){
        this.service = service;
    }

    @GetMapping
    public List<Hero> getHeros() {
        return service.findAll();
    }

    @GetMapping("/{heroId}")
    public Hero getHeroById(@PathVariable int heroId){
        return service.findByHeroId(heroId);
    }
}

