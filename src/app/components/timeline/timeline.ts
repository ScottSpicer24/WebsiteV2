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
  education: TlEntry[] = [];
  jobs: TlEntry[] = []

  // Set boolean of which to show and set data to that arrat
  showJobs: boolean = true
  data: TlEntry[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Get the education data from the json
    this.http.get<TlEntry[]>('assets/data/education.json').subscribe((data) => {
      this.education = data;
      console.log(this.education);
    });
    // get job data from the json
    this.http.get<TlEntry[]>('assets/data/jobs.json').subscribe((data) => {
      this.jobs = data;
      console.log(this.jobs);

      this.showJobs = true
      this.updateDisplayData()

    });
  }

  updateDisplayData(): void {
    this.data = this.showJobs ? this.jobs : this.education;
  }
}
