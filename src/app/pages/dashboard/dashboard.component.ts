import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  today: Date = new Date();
  calendarMonthIndex: number = this.today.getMonth();
  monthName: string = 'January';
  calendar: Date[] = this.buildDisplayMonth();

  generateCalendar() {
    const calendarYear = [];

    const startDate = new Date(this.today.getFullYear(), 0);

    function generateMonth(monthIndex: number) {
      const month = [];

      const day = new Date(startDate.getFullYear(), monthIndex, 1);

      while (day.getMonth() === monthIndex) {
        month.push(new Date(day));
        day.setDate(day.getDate() + 1);
      }

      return month;
    }

    for (let index = 0; index < 11; index++) {
      calendarYear.push(generateMonth(index));
    }

    return calendarYear;
  }

  buildDisplayMonth(mode: string = ''): Date[] {
    console.log(this.calendarMonthIndex);

    if (mode === 'increase') {
      if (this.calendarMonthIndex > 11) this.calendarMonthIndex = 0;

      this.calendarMonthIndex++;
    } else if (mode === 'decrease') {
      if (this.calendarMonthIndex < 0) this.calendarMonthIndex = 11;
      this.calendarMonthIndex--;
    }

    const monthNames: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.monthName = monthNames[this.calendarMonthIndex];
    const month = [];

    // const year = this.generateCalendar();
    // const currentMonth = year[today.getMonth()];

    for (let index = 0; index < 35; index++) {
      month.push(
        new Date(this.today.getFullYear(), this.calendarMonthIndex, index - 1)
      );
    }

    console.log(month[0]);

    return month;
  }

  constructor() {}

  ngOnInit(): void {}

  previousMonth() {
    this.calendar = this.buildDisplayMonth('decrease');
  }

  nextMonth() {
    this.calendar = this.buildDisplayMonth('increase');
  }
}
