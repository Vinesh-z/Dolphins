import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }

  announcements:any;
  ngOnInit() {
    this.announcementService.getAnnouncements().subscribe(data=>{
      console.log(data.announcements);
      this.announcements = data.announcements;
    });
  }

}
