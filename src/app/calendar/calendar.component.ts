import { Component, Output, EventEmitter } from '@angular/core';

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  dates: Date[];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();
  @Output() selected = new EventEmitter<Date[]>(); // Cambiar el tipo de EventEmitter a Date[]

  // Array con las fechas preestablecidas
  preselectedDates = [
    new Date('2023-03-19'),
    new Date('2023-03-20'),
    new Date('2023-03-21'),
    new Date('2023-03-23'),
    new Date('2023-03-25'),
    new Date('2023-03-31'),
  ];

  constructor() {
    this.dates = this.getCalendarDays(this.date);
  }

  setMonth(inc: number) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }

  isSameMonth(date: Date) {
    return date.getMonth() === this.date.getMonth();
  }

  private getCalendarDays(date = new Date()): Date[] {
    const calendarStartTime =
      this.getCalendarStartDay(date).getTime() +
      60 * 60 * 2 * 1000; /* add 2 hours for day light saving time adjustment */

    return this.range(0, 41).map((num) => {
      const date = new Date(calendarStartTime + DAY_MS * num);
      // Verificar si la fecha actual está en el array de fechas preestablecidas
      if (this.isSameDate([date], this.preselectedDates)) {
        date.setHours(12); // Marcar la fecha como seleccionada
      }
      return date;
    });
  }

  private getCalendarStartDay(date = new Date()): Date {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1, 7)
      .map((num) => new Date(firstDayOfMonth - DAY_MS * num))
      .find((dt) => dt.getDay() === 0)!;
  }

  private range(
    start: number,
    end: number,
    length = end - start + 1
  ): number[] {
    return Array.from({ length }, (_, i) => start + i);
  }

  // Función para verificar si dos arrays de fechas tienen alguna fecha en común
  public isSameDate(dates1: Date[], dates2: Date[], ): boolean {
    return dates1.some((date1) =>
      dates2.some(
        (date2) =>
          date1.getDate() === date2.getDate() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getFullYear() === date2.getFullYear()
      )
    );
  }

 // Function para seleccionar la fecha
selectDate(date: Date) {
  // Verificar si la fecha ya está seleccionada
  const index = this.preselectedDates.findIndex(d => this.isSameDate([d], [date]));
  if (index === -1) {
    // Si no está seleccionada, agregarla al array
    this.preselectedDates.push(date);
  }
  else {
    // Si ya está seleccionada, eliminarla del array
    this.preselectedDates.splice(index, 1);
  }

  // Emitir el array de fechas seleccionadas
  this.selected.emit(this.preselectedDates);

}

}
