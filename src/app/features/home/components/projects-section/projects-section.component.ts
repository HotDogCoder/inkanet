import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver,
    public themeservice: ThemeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.breakpointObserver.observe(this.breakpoints).subscribe((result: BreakpointState) => {
      if (result.matches) {
        console.log('news: ', result.breakpoints)
        for (let index = 0; index < this.breakpoints.length; index++) {
          console.log('breakpoint evaluated: ', this.breakpoints[index]) 
          const element = this.breakpoints[index];
          var dummie_value = result.breakpoints[element]
          if(dummie_value){
            this.dummie_target = element
          }
        }
        this.build_data()
      } else {
        this.build_data()
      }
    });
  }

  breakpoints:any[] = [
    "(min-width: 300px)",
    "(min-width: 420px)",
    "(min-width: 640px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)"
  ]

  projects: any[] = [
    {
      name: 'Ciberseguridad',
      slug: 'ciberseguridad',
      image: './assets/images/services/Ciberseguridad_icono_anaranjado.png',
      banner: './assets/images/services/Ciberseguridad_banner.png',
      description: 'Tenemos especialistas en ciberseguridad y brindamos soluciones óptimas de seguridad informática para su empresa.',
      active: false
    },
    {
      name: 'CyberSOC',
      slug: 'cyber-soc',
      image: './assets/images/services/CyberSOC_icono_anaranjado.png',
      banner: './assets/images/services/CyberSOC_banner.png',
      description: 'Centro especializado en preparar, identificar y responder a todo tipo de incidente cibernetico. Actuamos en una postura que...',
      active: false
    },
    {
      name: 'Infraestructura',
      slug: 'infraestructura',
      image: './assets/images/services/Infraestructura_icono_anaranjado.png',
      banner: './assets/images/services/Infraestructura_banner.png',
      description: 'Brindamos soluciones networking para fortalecer las redes de datos de su empresa. Nuestras soluciones networking san...',
      active: false
    }
  ]

  isHidden: boolean = false;
  dark: boolean = false;

  dummie_target = this.breakpoints[0];

  goto(section: string): void {
    console.log('--------- w ---------', section)
    this.router.navigate(['servicios',section])
  }

  build_data(){
    switch (this.dummie_target) {
      case this.breakpoints[0]:
        console.log('dummie_target: ', this.dummie_target)
        this.isHidden = true
      break;

      case this.breakpoints[1]:
        console.log('dummie_target: ', this.dummie_target)
        this.isHidden = true
      break;

      case this.breakpoints[2]:
        console.log('dummie_target: ', this.dummie_target)
        this.isHidden = true
      break;

      case this.breakpoints[3]:
        console.log('dummie_target: ', this.dummie_target)
        this.isHidden = false
      break;

      case this.breakpoints[4]:
        console.log('dummie_target: ', this.dummie_target)
        this.isHidden = false
      break;
    
      default:
        console.log('default dummie_console: ', this.dummie_target)
        this.isHidden = false
      break;
    }  
  }

  themeservicesubscription:Subscription;
  ngOnInit(): void {
    if(this.themeservicesubscription != undefined){
      this.themeservicesubscription.unsubscribe();
    } else {
      this.themeservicesubscription = this.themeservice.dark$.subscribe(
        (dark) => {
          console.log('subscription to theme => ', dark);
          this.dark = dark;
        }
      )
    }
  }

}
