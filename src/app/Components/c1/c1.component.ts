import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  id:string;

  constructor(private route: ActivatedRoute) { } //creo oggetto per collegarmi alle routing

  ngOnInit(): void {
    this.route.params.subscribe( //in caso di parametri, si attiva la subscribe
      (params) => this.id = params.id
    );
  }

}
