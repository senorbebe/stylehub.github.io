import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  show: boolean = true;
  div = -1;

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetails(index: number) {
    this.div = index;
  }

}
