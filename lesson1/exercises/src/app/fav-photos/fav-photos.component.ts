import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://flyclipart.com/thumb2/home-906510.png';
  image3 = 'https://media.istockphoto.com/vectors/sun-with-sunglasses-smiling-icon-vector-id1162188332?k=20&m=1162188332&s=612x612&w=0&h=29rbsDpEVATE1iN7ACs9TZc5rLtK2f5pocf88lDAGtE=';

  constructor() { }

  ngOnInit() {
  }

}