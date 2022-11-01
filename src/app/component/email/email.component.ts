import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private snack:"MatSnackBarModule") { }

  ngOnInit(): void {
  }
btnclick(){
console.log("button click")


}



}
