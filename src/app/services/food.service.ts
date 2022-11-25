import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface FoodApi {
  categories: [];
  highlights: [];
  featured: [];
}

export interface FoodDetailApi {
  name: string;
  rating: string;
  ratings: string;
  img: string;
  distance: string;
  tags: [];
  about: string;
  food: [];
}

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http: HttpClient) { }

  getFoodLists(): Observable<FoodApi> {
    return this.http.get<FoodApi>('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json');
  }

  getFoodDetails(): Observable<FoodDetailApi> {
    return this.http.get<FoodDetailApi>('https://devdactic.fra1.digitaloceanspaces.com/foodui/1.json');
  }
}
