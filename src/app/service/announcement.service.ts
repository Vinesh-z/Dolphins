import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  getAnnouncements(): Observable<any> {
    return this.http.get<any>('../../assets/announcement.json').pipe(map(announcements => {
      return announcements;
    }))
  }
}
