import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavlinkService } from '../../services/navlink/navlink.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linkservice: NavlinkService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let section_slug = params.get("section");
      console.log('section_slug: ', section_slug)
      this.linkservice.go_to(section_slug)
      //this.service = this.services.find(x => x.slug == service_slug)
      //this.extras = this.services.filter(x => x.slug != service_slug)
    });
  }

}
