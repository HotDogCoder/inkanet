import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  breakpoints:any[] = [
    "(min-width: 300px)",
    "(min-width: 420px)",
    "(min-width: 640px)",
    "(min-width: 768px)",
    "(min-width: 1024px)",
    "(min-width: 1280px)"
  ]

  brands_data = [
    {
      image: './assets/images/barracuda.jpg',
      url: ''
    },
    {
      image: './assets/images/celepsa.png',
      url: ''
    },
    {
      image: './assets/images/imperva.jpg',
      url: ''
    },
    {
      image: './assets/images/paloalto.jpg',
      url: ''
    },
    {
      image: './assets/images/TGP.png',
      url: ''
    },
    {
      image: './assets/images/fortinet.jpg',
      url: ''
    }
  ]

  brands_array = []

  dummie_target = this.breakpoints[0];

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
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

  ngOnInit(): void {

  }

  spliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
  }

  build_data(){
    switch (this.dummie_target) {
      case this.breakpoints[0]:
        console.log('dummie_target: ', this.dummie_target)
        this.brands_array = this.spliceIntoChunks(this.brands_data, 1)
      break;

      case this.breakpoints[1]:
        console.log('dummie_target: ', this.dummie_target)
        this.brands_array = this.spliceIntoChunks(this.brands_data, 1)
      break;

      case this.breakpoints[2]:
        console.log('dummie_target: ', this.dummie_target)
        this.brands_array = this.spliceIntoChunks(this.brands_data, 2)
      break;

      case this.breakpoints[3]:
        console.log('dummie_target: ', this.dummie_target)
        this.brands_array = this.spliceIntoChunks(this.brands_data, 2)
      break;

      case this.breakpoints[4]:
        console.log('dummie_target: ', this.dummie_target)
        this.brands_array = this.spliceIntoChunks(this.brands_data, 3)
      break;
    
      default:
          console.log('default dummie_console: ', this.dummie_target)
          this.brands_array = this.spliceIntoChunks(this.brands_data, 3)
        break;
    }  
    console.log('rest: ', this.brands_data) 
    console.log('result: ', this.brands_array) 
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left text-black sm:text-white"></i>', '<i class="fa-solid fa-angle-right text-black sm:text-white"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
