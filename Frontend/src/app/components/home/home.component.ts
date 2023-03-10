import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListModel } from 'src/app/models/shoppingList.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shoppingLists: ShoppingListModel[] = [];

  constructor(
    private _router: Router,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  logout() {
    localStorage.clear();
    this._router.navigateByUrl("/login")
  }

  getAll() {
    this._http.get<ShoppingListModel[]>("http://localhost:3000/api/shoppinglist/getAll").subscribe({
      next: (res) => {
        this.shoppingLists = res
      },
      error: (err) => {
        alert(err.eror.message);
        console.log(err);
      }
    })
  }

  add(form: NgForm) {
    this._http.post<any>("http://localhost:3000/api/shoppinglist/add", form.value).subscribe({
      next: (res) => {
        this.getAll();
        form.reset();
      },
      error: (err) => {
        alert(err.eror.message);
        console.log(err);
      }
    })
  }

  removeById(id: string) {
    let model = { "_id": id };
    this._http.post<any>("http://localhost:3000/api/shoppinglist/removeById", model).subscribe({
      next: (res) => {
        this.getAll();
      },
      error: (err) => {
        alert(err.eror.message);
        console.log(err);
      }
    })
  }

  updateById(id: string) {
    let model = { "_id": id };
    this._http.post<any>("http://localhost:3000/api/shoppinglist/updateById", model).subscribe({
      next: (res) => {
        this.getAll();
      },
      error: (err) => {
        alert(err.eror.message);
        console.log(err);
      }
    })
  }

  changeClassByStatus(status: Boolean){
    if(status) return "text-success"

    return "text-danger"
  }
}
