package learn.roguelike.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
//@RequestMapping("/health_check")
public class HealthCheckController {

    @GetMapping
    public void healthCheck(){
    }
}
