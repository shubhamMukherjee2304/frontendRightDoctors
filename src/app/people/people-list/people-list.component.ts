import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/core/services/person.service';
import { Person } from 'src/app/core/models/person.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];

  constructor(private personService: PersonService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople(): void {
    this.personService.getAllPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      (error) => {
        this.snackBar.open('Error fetching people', 'Close', { duration: 3000 });
      }
    );
  }

  deletePerson(id: string): void {
    this.personService.deletePerson(id).subscribe(
      () => {
        this.people = this.people.filter(person => person._id !== id);
        this.snackBar.open('Person deleted successfully', 'Close', { duration: 3000 });
      },
      (error) => {
        this.snackBar.open('Error deleting person', 'Close', { duration: 3000 });
      }
    );
  }
}