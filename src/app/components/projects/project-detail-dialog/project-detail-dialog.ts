// project-detail-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Project } from '../../../../assets/data/datatypes';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-detail-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './project-detail-dialog.html',
  styleUrl: './project-detail-dialog.scss'

})
export class ProjectDetailDialog {
  basePath = '../../../../assets'; // Adjust to match your path

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}