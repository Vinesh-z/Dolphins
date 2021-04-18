import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lessPhotos = ['../../assets/photos/pic1.JPG', '../../assets/photos/pic3.JPG', '../../assets/photos/pic4.JPG', '../../assets/photos/pic5.JPG'];
  
  allPhotos =['../../assets/photos/pic1.JPG', '../../assets/photos/pic3.JPG', '../../assets/photos/pic4.JPG', '../../assets/photos/pic5.JPG', 
  '../../assets/photos/pic6.JPG', '../../assets/photos/pic7.JPG','../../assets/photos/pic8.JPG', '../../assets/photos/pic9.JPG', 
  '../../assets/photos/pic14.JPG','../../assets/photos/pic17.JPG','../../assets/photos/pic19.JPG', '../../assets/photos/pic21.JPG', 
  '../../assets/photos/pic22.JPG',  '../../assets/photos/pic25.JPG', '../../assets/photos/pic26.JPG','../../assets/photos/pic31.JPG', 
  '../../assets/photos/pic32.JPG', '../../assets/photos/pic33.JPG', '../../assets/photos/pic34.JPG', '../../assets/photos/pic35.JPG', 
  '../../assets/photos/pic36.JPG', '../../assets/photos/pic37.JPG', '../../assets/photos/pic38.JPG','../../assets/photos/pic40.JPG'];

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

  showAdmission() {
    Swal.fire({
      html: '<iframe width="100%" height="600" src="https://docs.google.com/forms/d/e/1FAIpQLScACabN6Kd8mEIExg7M3oUirtTd65v1CdXzVp_nVzaT100V7w/viewform?embedded=true" frameborder="0"></iframe>'
  });
  }

}
