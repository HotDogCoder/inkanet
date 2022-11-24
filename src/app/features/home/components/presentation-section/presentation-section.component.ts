import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryService } from '../../services/gallery/gallery.service';
import { NavlinkService } from '../../services/navlink/navlink.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.css']
})
export class PresentationSectionComponent implements OnInit, OnDestroy {

  constructor(
  ) { }
  
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
