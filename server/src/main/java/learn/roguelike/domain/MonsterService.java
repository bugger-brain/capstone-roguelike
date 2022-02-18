package learn.roguelike.domain;

import learn.roguelike.data.MonsterRepository;
import learn.roguelike.models.Monster;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonsterService {

    private final MonsterRepository repository;

    public MonsterService(MonsterRepository repository) {
        this.repository = repository;
    }

    public List<Monster> findAll() {
        return repository.findAll();
    }
}
