import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lessPhotos = ['../../assets/photos/pic41.JPG','../../assets/photos/pic42.JPG','../../assets/photos/pic43.JPG','../../assets/photos/pic44.JPG'];
  
  allPhotos =[
  '../../assets/photos/pic41.JPG','../../assets/photos/pic42.JPG','../../assets/photos/pic43.JPG','../../assets/photos/pic44.JPG',
  '../../assets/photos/pic45.JPG','../../assets/photos/pic46.JPG','../../assets/photos/pic47.JPG','../../assets/photos/pic48.JPG',
  '../../assets/photos/pic49.JPG','../../assets/photos/pic50.JPG','../../assets/photos/pic51.JPG','../../assets/photos/pic52.JPG',
  '../../assets/photos/pic53.JPG','../../assets/photos/pic54.JPG','../../assets/photos/pic55.JPG','../../assets/photos/pic56.JPG',
  '../../assets/photos/pic57.JPG','../../assets/photos/pic58.JPG','../../assets/photos/pic59.JPG',];

  showAll = false;
  pics = [];
  constructor(private announcementService: AnnouncementService) { }

  announcements: any;
  ngOnInit() {
    this.pics = this.lessPhotos;
    this.announcementService.getAnnouncementsFromGit().subscribe(data => {
      console.log((data));
      this.announcements = data.announcements;
    });
  }

  toggleImages() {
    this.showAll = !this.showAll
    if(this.showAll) {
      this.pics = this.allPhotos;
    } else {
      this.pics = this.lessPhotos;
    }
  }
  
  imageClick(imgId) {
    Swal.fire({
      imageUrl: imgId,
      imageWidth: 1200,
      imageHeight: 350,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(0,0,123,0.4)
      left top
      no-repeat
    `
    });
  }

  moveToFooter() {
    document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
  }

  routeToNotice() {
    document.getElementById('announcements').scrollIntoView({behavior: 'smooth'});
  }

  routeToGallery() {
    document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});
  }

  showAdmission() {
    Swal.fire({
      html: '<iframe width="100%" height="600" src="https://docs.google.com/forms/d/e/1FAIpQLScACabN6Kd8mEIExg7M3oUirtTd65v1CdXzVp_nVzaT100V7w/viewform?embedded=true" frameborder="0"></iframe>'
  });
  }

}
