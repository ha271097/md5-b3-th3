import { Component, OnInit } from '@angular/core';
import { Iphone } from '../iphone';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {
phone1: Iphone = {
    name: 'iphone 11',
    price : 10000
}
phone2: Iphone = {
  name: 'iphone 12',
  price : 20000
}
phone3: Iphone = {
  name: 'iphone 13',
  price : 30000
}
listIphone = [this.phone1,this.phone2,this.phone3]


  constructor() { }

  ngOnInit(): void {
  }

}
