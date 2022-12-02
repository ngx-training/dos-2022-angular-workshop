import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  createForm!: FormGroup;
  workshopVisible = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: [''],
      content: ['']
    });

    this.createForm.get('author')?.valueChanges.subscribe(value => {
      if (value === 'Gregor') {
        this.createForm.addControl('workshop', new FormControl());
        this.workshopVisible = true;
      } else {
        if (this.createForm.get('workshop')) {
          this.createForm.removeControl('workshop');
          this.createForm.clearValidators();
        }
        this.workshopVisible = false;
      }
    });
  }

  saveForm() {
    console.log(this.createForm.value);
  }

}
