import { Component } from '@angular/core';
import { SvgBaseComponent } from '../svg-base/svg-base.component';
import { GradientAnimations } from '../../gradient-animations';

@Component({
  selector: 'gradient-svg-banner-reversed',
  templateUrl: './svg-banner-reversed.component.svg',
  styleUrl: './svg-banner-reversed.component.scss',
  animations: [
      GradientAnimations.gradientTransition
  ]
})
export class SvgBannerReversedComponent extends SvgBaseComponent {}
