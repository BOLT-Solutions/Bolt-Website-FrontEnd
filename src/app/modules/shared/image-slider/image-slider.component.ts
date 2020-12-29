import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryItem } from '../../../models/http-models/gallery-item';
import { GalleryItemService } from '../../../services/gallery-item-service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  //Models
  galleryItems: Array<GalleryItem> = new Array<GalleryItem>();

  //Carousel options
  slideConfig = {
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    swipe: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  //Declare services
  constructor(private router: Router, private GalleryService: GalleryItemService) { }


  ngOnInit(): void {

    //Fetch Slider objects Via Observable (Http-request)
    //this.GalleryService.GetGalleryItems().subscribe(res => {
    //  if (res.succeeded) { // API method sucessful
    //    this.galleryItems = res.data;
    //  }
    //}, error => {
    //  const errors: string[] = error.error.errors[0];
    //});

    //Dummy Content Filled for static purposes
    this.galleryItems = [
      {
        id: 0,
        title: 'Project Presentation',
        content: 'The final step is to present our project to a client.We show our vision of his request',
        imagePath: 'solution1.png'
      },
      {
        id: 1,
        title: 'Identifying the need',
        content: 'On this stage we communicate with the client to know more about his company and',
        imagePath: 'solution2.jpg'
      },
      {
        id: 2,
        title: 'Creating a project',
        content: 'Our creative team works on the project, offering its several variants.We make visual',
        imagePath: 'solution3.jpg'
      },
      {
        id: 3,
        title: 'Creating a project',
        content: 'Our creative team works on the project, offering its several variants.We make visual',
        imagePath: 'solution3.jpg'
      },
      {
        id: 4,
        title: 'Creating a project',
        content: 'Our creative team works on the project, offering its several variants.We make visual',
        imagePath: 'solution3.jpg'
      }
    ];
  }

  //Route to item page via id
  ViewItem(galleryItemId) {
    //Store id in local storage
    localStorage.setItem('galleryId', galleryItemId);
    this.router.navigate(['about-us']);
  }
}
