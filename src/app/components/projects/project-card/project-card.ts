import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../assets/data/datatypes';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard implements OnInit{
  ngOnInit() {
    this.item.ToolsVisualPath = this.item.ToolsVisualPath?.map(p => `/assets/${p}`);
    console.log("Item path: " + this.item.ToolsVisualPath[0])
  }
  
  @Input() item!: Project;
  basePath = "../../../../assets/";
}
