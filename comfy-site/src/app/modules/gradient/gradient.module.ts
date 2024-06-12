import { NgModule } from '@angular/core';
import { SvgBannerComponent } from './svg/svg-banner/svg-banner.component';
import { CommonModule } from '@angular/common';
import { SvgBannerReversedComponent } from './svg/svg-banner-reversed/svg-banner-reversed.component';

@NgModule({
  declarations: [SvgBannerComponent, SvgBannerReversedComponent],
  imports: [
    CommonModule
  ],
  exports: [SvgBannerComponent, SvgBannerReversedComponent]
})
export class GradientModule { }
