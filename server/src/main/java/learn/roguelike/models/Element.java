package learn.roguelike.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Element {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int elementId;
    private boolean air;
    private boolean water;
    private boolean earth;
    private boolean fire;
}
