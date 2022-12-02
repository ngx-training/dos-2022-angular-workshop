import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input('username') name: string | undefined;
  @Input() email: string | undefined;
  @Output() moreSalaryEvent = new EventEmitter<string>();

  @Input() salary: number | undefined;
  @Output() salaryChange = new EventEmitter<number>();

  askForMoreSalary() {
    this.moreSalaryEvent.emit('Chef, ich brauche mehr Geld!');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'Anne';
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('Komponente wurde zerstört.');
  }
}
