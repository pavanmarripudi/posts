import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  _title(_title: any) {
    throw new Error('Method not implemented.');
  }
  title(_title: any): void {
    throw new Error('Method not implemented.');
  }
  name : string;
  age: number;
  bio: string;
  gender: string;
  id: number;

  users:Array<any>=[];
  http: any;

  handleSubmit() {
    console.log(this.name,this.age,this.bio,this.gender)
    this.users.push({
      name:this.name,
      age:this.age,
      bio:this.bio,
      gender:this.gender,
    })

   console.log(this.users);

   this.http.get('https://fakestoreapi.com/products').subscribe((response: any) => {
    console.log(response) })
  }
}

