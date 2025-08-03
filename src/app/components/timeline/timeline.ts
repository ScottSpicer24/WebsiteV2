import { Component, HostListener, OnInit } from '@angular/core';
import { Degree } from '../../../assets/data/datatypes';
import { HttpClient } from '@angular/common/http';
import { TimelineCard } from "./timeline-card/timeline-card";

@Component({
  selector: 'app-timeline',
  imports: [TimelineCard],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class Timeline implements OnInit {
  testScroll = ''
  jsonData: Degree[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Degree[]>('assets/data/degrees.json').subscribe((data) => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

  /*
  @HostListener('window:scroll') onScroll(){
    //console.log(window.screenY);
    if(window.scrollY > 0){
      this.testScroll = 'scrolled';
      console.log(this.testScroll)
    }
    else{
      this.testScroll = '';
    }
  }
  */

}
