import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/movement/movement';
import { MovementService } from 'src/app/movement/movement.service';

@Component({
  selector: 'app-movement-section',
  templateUrl: './movement-section.component.html',
  styleUrls: ['./movement-section.component.css']
})
export class MovementSectionComponent implements OnInit {

  movements: Array<Movement> = [];
  constructor(private movementService: MovementService) {}

  getMovements(): void {
    this.movementService. getMovements().subscribe((movement) => {
      this.movements = movement;
    });
  }

  ngOnInit() {
    this.getMovements();
  }

}
