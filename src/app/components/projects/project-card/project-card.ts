import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../assets/data/datatypes';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  imports: [MatButtonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard implements OnInit{
  ngOnInit() {
    this.item.ToolsVisualPath = this.item.ToolsVisualPath?.map(p => `/assets/${p}`);
    console.log("Item path: " + this.item.ToolsVisualPath[0])
    this.flipped = false;
  }
  
  @Input() item!: Project;
  @Input() flipped!: boolean;
  basePath = "../../../../assets/";
}
