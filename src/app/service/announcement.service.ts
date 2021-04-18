import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }


  getAnnouncementsFromGit(): Observable<any> {
    return this.http.get<any>('https://raw.githubusercontent.com/Vinesh-z/Dolphins-Announcements/master/announcement.json');
  }
}
