import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styles: [
  ]
})
export class ProtectComponent implements OnInit {

  constructor( public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe( perfil => console.log(perfil));
  }

}
