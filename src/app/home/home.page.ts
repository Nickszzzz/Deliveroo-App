import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { FoodService } from '../services/food.service';
import { HideHeaderDirective } from '../directives/hide-header.directive';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  categories = [];
  featured = [];
  highlights = [];
  showLocationDetail = false;

  constructor(private foodService: FoodService, ) {}

  ngOnInit() {
    this.foodLists();
  }

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10
  };

  highlightSlideOpts = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true
  };

  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
  };

  foodLists() {
    this.foodService.getFoodLists().subscribe((res) => {
      this.categories = res.categories;
      console.log(this.categories);
      this.highlights = res.highlights;
      this.featured = res.featured;
    });
  }

  doRefresh(ev: any) {
    setTimeout(() => {
      ev.target.complete();
    }, 2000);
  }

  onScroll(ev: any) {
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 50;
    console.log(offset > 50 ? this.showLocationDetail : 'ok');
  }

}
