package learn.roguelike.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
<<<<<<< HEAD
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/healthcheck")
=======
@RequestMapping("/hc")
>>>>>>> 01f3d5d1c2c3561fb07d2f73ed05494d9c80a690
public class HealthCheckController {

    @GetMapping
    public void healthCheck(){
    }
}
