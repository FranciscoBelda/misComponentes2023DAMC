import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: any[],
            texto: string,
            columna: string): any[] {

    if(texto == '')return lista;

    texto = texto.toLowerCase();
    return lista.filter(
      item => {
        if(item[columna].isNaN) return item[columna].toLowerCase().includes(texto)
        else {return item[columna].toString().includes(texto);
        }
      }
    )

  }

}
