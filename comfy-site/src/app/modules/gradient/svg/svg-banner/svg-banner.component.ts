import { Component } from '@angular/core';
import { SvgBaseComponent } from '../svg-base/svg-base.component';
import { GradientAnimations } from '../../gradient-animations';

@Component({
  selector: 'gradient-svg-banner',
  templateUrl: './svg-banner.component.svg',
  styleUrl: './svg-banner.component.scss',
  animations: [
      GradientAnimations.gradientTransition
  ]
})
export class SvgBannerComponent extends SvgBaseComponent {}
