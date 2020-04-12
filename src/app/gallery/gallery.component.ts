import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  classPhotos = ['../../assets/photos/pic1.JPG', '../../assets/photos/pic2.JPG', '../../assets/photos/pic3.JPG', '../../assets/photos/pic4.JPG', '../../assets/photos/pic5.JPG', '../../assets/photos/pic6.JPG', '../../assets/photos/pic7.JPG'];
  // tslint:disable-next-line:max-line-length
  fancyPhotos = ['../../assets/photos/pic8.JPG', '../../assets/photos/pic9.JPG', '../../assets/photos/pic10.JPG', '../../assets/photos/pic11.JPG', '../../assets/photos/pic12.JPG', '../../assets/photos/pic13.JPG', '../../assets/photos/pic14.JPG',
    // tslint:disable-next-line:max-line-length
    '../../assets/photos/pic15.JPG', '../../assets/photos/pic16.JPG', '../../assets/photos/pic17.JPG', '../../assets/photos/pic18.JPG', '../../assets/photos/pic19.JPG', '../../assets/photos/pic20.JPG'];
  // tslint:disable-next-line:max-line-length
  independencePhotos = ['../../assets/photos/pic21.JPG', '../../assets/photos/pic22.JPG', '../../assets/photos/pic23.JPG', '../../assets/photos/pic24.JPG', '../../assets/photos/pic25.JPG', '../../assets/photos/pic26.JPG'];
  // tslint:disable-next-line:max-line-length
  otherPhotos = ['../../assets/photos/pic27.JPG', '../../assets/photos/pic28.JPG', '../../assets/photos/pic29.JPG', '../../assets/photos/pic30.JPG'];
  // tslint:disable-next-line:max-line-length
  sportsPhotos = ['../../assets/photos/pic31.JPG', '../../assets/photos/pic32.JPG', '../../assets/photos/pic33.JPG', '../../assets/photos/pic34.JPG', '../../assets/photos/pic35.JPG', '../../assets/photos/pic36.JPG', '../../assets/photos/pic37.JPG', '../../assets/photos/pic38.JPG', '../../assets/photos/pic39.JPG', '../../assets/photos/pic40.JPG'];

  modal = document.getElementById('myModal');
  img = document.getElementById('myImg');
  pics = [];

  constructor() { }

  ngOnInit() {
    this.pics = this.classPhotos;
  }

  selectList(list) {
    console.log(list);
    this.pics = list;
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

}
