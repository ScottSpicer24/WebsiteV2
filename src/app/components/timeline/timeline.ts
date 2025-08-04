import { Component, OnInit } from '@angular/core';
import { TlEntry } from '../../../assets/data/datatypes';
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
  data: TlEntry[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TlEntry[]>('assets/data/timeline.json').subscribe((data) => {
      this.data = data;
      console.log(this.data);
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
