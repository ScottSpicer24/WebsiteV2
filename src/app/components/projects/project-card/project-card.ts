import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../assets/data/datatypes';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailDialog } from '../project-detail-dialog/project-detail-dialog';

@Component({
  selector: 'app-project-card',
  imports: [MatButtonModule, ProjectDetailDialog],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard implements OnInit{
  ngOnInit() {
    this.item.ToolsVisualPath = this.item.ToolsVisualPath?.map(p => `/${p}`);
    console.log("Item path: " + this.item.ToolsVisualPath[0])
    this.flipped = false;
  }
  
  @Input() item!: Project;
  @Input() flipped!: boolean;
  basePath = "../../../assets";

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(ProjectDetailDialog, {
      data: this.item,
      maxWidth: '900px',
      width: '90vw',
      panelClass: 'project-dialog'
    });
  }
}
