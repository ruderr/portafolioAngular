import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit{

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
              public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
      // console.log(parametros);
      this.productoService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {
              this.id = parametros['id'];
              //console.log(producto);
              this.producto = producto;
          })
    });
  }
}
