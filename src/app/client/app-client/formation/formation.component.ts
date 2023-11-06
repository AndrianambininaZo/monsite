import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  constructor() { }
 
  ngOnInit() {
  }
  openNewTab(url: string) {
    window.open(url, '_blank');
  }

}






