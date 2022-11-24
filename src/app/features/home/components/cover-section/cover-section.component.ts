import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { GalleryService } from '../../services/gallery/gallery.service';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-cover-section',
  templateUrl: './cover-section.component.html',
  styleUrls: ['./cover-section.component.css']
})
export class CoverSectionComponent implements OnInit {

  file : any;
  dark: boolean = false;

  breakpoints:any[] = [
    "(min-width: 300px)",
    "(min-width: 420px)",
    "(min-width: 640px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)"
  ]

  isHidden: boolean = false;

  constructor(
    public galleryservice: GalleryService,
    public themeservice: ThemeService,
    private breakpointObserver: BreakpointObserver
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

  dummie_target = this.breakpoints[0];

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
    this.galleryservice.getCover().subscribe(file => {
      this.file = file;
    });
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
