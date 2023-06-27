import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users = [
    {ID:1, name: "Osama bin Laden"},
    {ID:2, name: "Naruto Uzumaki"},
    {ID:3, name: "Junker Otto Eduard Leopold von Bismarck"}
  ];

}
