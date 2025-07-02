import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsBackComponent } from './projects-back.component';

describe('ProjectsBackComponent', () => {
  let component: ProjectsBackComponent;
  let fixture: ComponentFixture<ProjectsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
