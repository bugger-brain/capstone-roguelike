package learn.roguelike.domain;

import learn.roguelike.data.HeroRepository;
import learn.roguelike.models.Hero;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HeroService {

    private final HeroRepository repository;

    public HeroService(HeroRepository repository){
        this.repository = repository;
    }

    public List<Hero> findAll(){
        return repository.findAll();
    }

    public Hero findByHeroId(int heroId){
        return repository.findByHeroId(heroId);
    }
}
