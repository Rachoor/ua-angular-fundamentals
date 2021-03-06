import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="app">
      <h3> Airline passengers (using Pipe)</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
            >
          </span>
          Index {{i}} - {{ passenger.id }} : {{ passenger.fullname }}
          <p> {{ passenger | json }} </p>
          <div class="date">
            Check in Date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>
      <hr/>

      <h3> Airline passengers (Safe Navigation operator)</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
            >
          </span>
          Index {{i}} - {{ passenger.id }} : {{ passenger.fullname }}
          <p> {{ passenger | json }} </p>
          <div class="date">
            Check in Date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
      <hr/>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];
}