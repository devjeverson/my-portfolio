import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFrontComponent } from './projects-front.component';

describe('ProjectsFrontComponent', () => {
  let component: ProjectsFrontComponent;
  let fixture: ComponentFixture<ProjectsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsFrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
