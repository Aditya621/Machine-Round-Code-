import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-restro-menu',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './restroMenu.component.html',
  styleUrls: ['./restroMenu.component.scss'],
})
export class RestroMenuComponent {
  restroForm!: FormGroup;
  cuisineOptions = ['Italina', 'Indian', 'Continental'];
  restros: any[] = [];
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.restroForm = this._fb.group({
      name: ['', Validators.required],
      cuisines: this._fb.array(
        this.cuisineOptions.map(() => this._fb.control(false))
      ),
    });
  }

  get cuisineArray() {
    return this.restroForm.get('cuisines') as FormArray;
  }

  public addRestaurant() {
    const selectedCuisine = this.cuisineOptions.filter(
      (_, i) => this.cuisineArray.at(i).value
    );

    this.restros.push({
      name: this.restroForm.value.name,
      cuisines: selectedCuisine,
      dishes: [],
    });
    this.restroForm.reset();
  }

  public addDish(
    restro: any,
    dishName: HTMLInputElement,
    dishPrice: HTMLInputElement,
    dishType: HTMLSelectElement
  ) {
    restro.dishes.push({
      name: dishName.value,
      price: dishPrice.value,
      type: dishType.value,
    });

    // Clear inputs
    dishName.value = '';
    dishPrice.value = '';
    dishType.value = 'Veg';
  }
}
