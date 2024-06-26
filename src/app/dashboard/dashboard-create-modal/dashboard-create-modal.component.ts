import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-create-modal',
  templateUrl: './dashboard-create-modal.component.html',
  styleUrls: ['./dashboard-create-modal.component.scss'],
})
export class DashboardCreateModalComponent {
  countryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.countryForm = this.fb.group({
      name: this.fb.group({
        common: ['', Validators.required],
        official: ['', Validators.required],
        nativeName: this.fb.group({
          fra: this.fb.group({
            official: ['', Validators.required],
            common: ['', Validators.required],
          }),
        }),
      }),
      currencies: this.fb.group({
        XPF: this.fb.group({
          name: ['', Validators.required],
          symbol: ['', Validators.required],
        }),
      }),
      capital: this.fb.array(['', Validators.required]), // Assuming single string for simplicity
      region: ['', Validators.required],
      population: [0, Validators.required],
      timezones: this.fb.array(['', Validators.required]), // Assuming single string for simplicity
      continents: this.fb.array(['', Validators.required]), // Assuming single string for simplicity
      startOfWeek: ['', Validators.required],
      postalCode: this.fb.group({
        format: ['', Validators.required],
        regex: ['', Validators.required],
      }),
    });
  }
}
