import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { Project } from '../../../assets/data/datatypes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  data: Project[] = [];
  currIndex = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Project[]>('assets/data/projects.json').subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
