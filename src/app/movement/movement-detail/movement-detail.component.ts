import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementDetail } from '../movement-details';
import { MovementService } from '../movement.service';

@Component({
  selector: 'app-movement-detail',
  templateUrl: './movement-detail.component.html',
  styleUrls: ['./movement-detail.component.css']
})
export class MovementDetailComponent implements OnInit {

  movementId!: number;

  @Input() movementDetail!: MovementDetail; 

  constructor(
    private route: ActivatedRoute,
    private movementService: MovementService
  ) {}

  getMovement() {
    this.movementService.getMovement(this.movementId).subscribe((movement) => {
      this.movementDetail = movement
      console.log(movement);
      
    });
  }

  ngOnInit() {
    if (this.movementDetail === undefined) {
      const id = this.route.snapshot.paramMap.get('id')!;
      console.log(id);

      if (this.movementId) {
        this.getMovement();
      }
    } 
  }

}
