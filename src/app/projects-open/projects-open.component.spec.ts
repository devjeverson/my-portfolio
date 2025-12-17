import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOpenComponent } from './projects-open.component';

describe('ProjectsOpenComponent', () => {
  let component: ProjectsOpenComponent;
  let fixture: ComponentFixture<ProjectsOpenComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
