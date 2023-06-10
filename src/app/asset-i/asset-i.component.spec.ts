import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetIComponent } from './asset-i.component';

describe('AssetIComponent', () => {
  let component: AssetIComponent;
  let fixture: ComponentFixture<AssetIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
