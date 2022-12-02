import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Blog';
  date = new Date();
  salary = 1450.60;
  user = { name: 'Gregor', age: 30 };

  liste = ['Tomate', 'Apfel', 'Birne'];

  cardVisible = true;

  salaryHandler(message: string) {
    alert(message);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user.name = 'Olaf';
    }, 6000);
  }
}
