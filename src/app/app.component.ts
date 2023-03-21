import { Component, EventEmitter, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-quickstart';
  img =
    'https://firebasestorage.googleapis.com/v0/b/check-in-8e659.appspot.com/o/food1.png?alt=media&token=390f4c8d-24c7-4bf3-8b47-06ce53ca9a7e';
  name = 'Food';
  description = 'This is a food';

  selected = new EventEmitter<any>(); // declarar el tipo de la propiedad selected

  // Array con las fechas preestablecidas
  preselectedDates = [
    new Date('2023-03-19T00:00:00.000-07:00'),
    new Date('2023-03-20T00:00:00.000-07:00'),
    new Date('2023-03-21T00:00:00.000-07:00'),
    new Date('2023-03-23T00:00:00.000-07:00'),
    new Date('2023-03-25T00:00:00.000-07:00'),
    new Date('2023-03-31T00:00:00.000-07:00'),
  ];
  date = new Date();
}
