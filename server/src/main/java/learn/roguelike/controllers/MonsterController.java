package learn.roguelike.controllers;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping("game")
@ConditionalOnWebApplication
public class MonsterController {


}
