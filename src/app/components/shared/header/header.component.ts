import { Component } from '@angular/core';
import { InformacionService } from "../../../services/informacion.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor( public _is:InformacionService,
                private router: Router ){}

    buscarProducto( termino: string ){

    if ( termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);
    }

}
