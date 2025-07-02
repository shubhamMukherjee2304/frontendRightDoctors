import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../core/services/person.service';
import { Person } from '../../core/models/person.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  personForm: FormGroup;
  isEditMode = false;
  personId: string;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personId = params.get('id');
      if (this.personId) {
        this.isEditMode = true;
        this.loadPersonData(this.personId);
      }
    });
  }

  loadPersonData(id: string): void {
    this.personService.getPersonById(id).subscribe(person => {
      this.personForm.patchValue(person);
    });
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      const person: Person = this.personForm.value;
      if (this.isEditMode) {
        this.personService.updatePerson(this.personId, person).subscribe(() => {
          this.snackBar.open('Person updated successfully!', 'Close', { duration: 3000 });
          this.router.navigate(['/people']);
        });
      } else {
        this.personService.createPerson(person).subscribe(() => {
          this.snackBar.open('Person created successfully!', 'Close', { duration: 3000 });
          this.router.navigate(['/people']);
        });
      }
    }
  }
}