import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { Project } from '../../../assets/data/datatypes';
import { HttpClient } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, NgClass, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  data: Project[] = [];
  currIndex = 0;
  lastIndex = 100;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('assets/data/projects.json').subscribe((data) => {
      this.data = data;
      this.lastIndex = data.length - 1;
      console.log(this.data);
    });
  }

  animClass = '';

  left() {
    // show previous item
    this.currIndex = (this.currIndex - 1 + this.data.length) % this.data.length;
    this.animClass = 'slide-right'; // coming from left -> move right-to-center
  }

  right() {
    // show next item
    this.currIndex = (this.currIndex + 1) % this.data.length;
    this.animClass = 'slide-left';  // coming from right -> move left-to-center
  }

}
