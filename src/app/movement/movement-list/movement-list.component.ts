import { Component, OnInit } from '@angular/core';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {

  selected: boolean = false;
  selectedMovement!: Movement;

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

  onSelected(movement: Movement): void {
    this.selected = true;
    this.selectedMovement = movement;
    console.log(this.selectedMovement);
    
  }

}
