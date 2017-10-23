import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username : string;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //this.username = this.activatedRoute.snapshot.params['username']; // won't reload!
    this.activatedRoute.params.subscribe(params => { // OK, would reload
      this.username = params['username'];
    });
  }

}
