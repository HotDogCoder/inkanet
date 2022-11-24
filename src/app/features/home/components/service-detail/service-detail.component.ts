import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavlinkService } from '../../services/navlink/navlink.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  @Input() dark: boolean;
  
  services: any[] = [
    {
      name: 'Ciberseguridad',
      slug: 'ciberseguridad',
      image: './assets/images/services/Ciberseguridad_icono_anaranjado.png',
      banner: './assets/images/services/Ciberseguridad_banner.jpg',
      description: 'Tenemos especialistas en ciberseguridad y brindamos soluciones óptimas de seguridad informática para su empresa.',
      active: false
    },
    {
      name: 'CyberSOC',
      slug: 'cyber-soc',
      image: './assets/images/services/CyberSOC_icono_anaranjado.png',
      banner: './assets/images/services/CyberSOC_banner.jpg',
      description: 'Centro especializado en preparar, identificar y responder a todo tipo de incidente cibernetico. Actuamos en una postura que...',
      active: false
    },
    {
      name: 'Infraestructura',
      slug: 'infraestructura',
      image: './assets/images/services/Infraestructura_icono_anaranjado.png',
      banner: './assets/images/services/Infraestructura_banner.jpg',
      description: 'Brindamos soluciones networking para fortalecer las redes de datos de su empresa. Nuestras soluciones networking san...',
      active: false
    }
  ]

  extras: any[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private linkservice: NavlinkService
  ) { }

  service: any = {
    image: '',
    description: '',
    active: false
  };

  ngOnInit(): void {
    this.linkservice.go_to('inicio')
    this.route.paramMap.subscribe(params => {
      let service_slug = params.get("service");
      this.service = this.services.find(x => x.slug == service_slug)
      this.extras = this.services.filter(x => x.slug != service_slug)
    });
  }

  goto(section: string): void {
    this.router.navigate(["section", section]).then(x => {
      this.linkservice.go_to('inicio')
    });
  }

}
