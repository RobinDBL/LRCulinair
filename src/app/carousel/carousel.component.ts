import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;



  images = ["../../assets/images/carousel_2.jpg", "../../assets/images/carousel_3.jpg", "../../assets/images/carousel_4.jpg", "../../assets/images/carousel_5.jpg", "../../assets/images/carousel_7.jpg", "../../assets/images/carousel_8.jpg", "../../assets/images/carousel_9.jpg", "../../assets/images/carousel_10.jpg", "../../assets/images/carousel_11.jpg", "../../assets/images/carousel_12.jpg", "../../assets/images/carousel_13.jpg", "../../assets/images/carousel_14.jpg", "../../assets/images/carousel_15.jpg", "../../assets/images/carousel_16.jpg", "../../assets/images/carousel_1.jpg"];

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;


  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
