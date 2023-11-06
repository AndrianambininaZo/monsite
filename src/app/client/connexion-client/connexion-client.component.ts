import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion-client',
  templateUrl: './connexion-client.component.html',
  styleUrls: ['./connexion-client.component.scss']
})
export class ConnexionClientComponent implements OnInit {
  isCompte:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  creerCompte(){
    this.isCompte=true
  }

}
