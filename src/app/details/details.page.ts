import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {

  name = '';
  singleImg = '';
  rating = '';
  ratings = '';
  tags = [];
  distance = '';
  about = '';

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getFoodDetails();
  }

  getFoodDetails() {
    this.foodService.getFoodDetails().subscribe((res) => {
      this.name = res.name;
      this.singleImg = res.img;
      this.rating = res.rating;
      this.ratings = res.ratings;
      this.tags = res.tags;
      this.distance = res.distance;
      this.about = res.about;
    });
  }

  ngAfterViewInit(): void {
    
  }

}
