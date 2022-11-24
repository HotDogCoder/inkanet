import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavlinkService {

  public links = new BehaviorSubject<any[]>(
    [
      {description:'Inicio',url:'',slug: null},
      {description:'Servicios',url:'servicios',slug:'servicios'},
      {description:'¿Quienes Somos?',url:'quienes-somos',slug:'quienes-somos'},
      {description:'Contacto',url:'contacto',slug:'contacto'},
      {description:'Aliados',url:'aliados',slug:'aliados'},
      {description:'Clientes',url:'clientes',slug:'clientes'}
    ]
  );


  go_to(link) {
    document.querySelector('#'+link).scrollIntoView();
  }

  public link = new BehaviorSubject<any>({description:'Portada video',link:'../'});

  links$:Observable<any[]> = this.links.asObservable();
  link$:Observable<any[]> = this.link.asObservable();

  constructor() {}

  set_links(links){
    this.links.next(links);
  }
  set_link(link){
    this.link.next(link);
  }

}
