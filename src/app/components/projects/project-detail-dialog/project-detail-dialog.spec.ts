import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailDialog } from './project-detail-dialog';

describe('ProjectDetailDialog', () => {
  let component: ProjectDetailDialog;
  let fixture: ComponentFixture<ProjectDetailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
