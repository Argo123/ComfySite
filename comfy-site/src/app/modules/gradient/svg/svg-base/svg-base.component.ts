import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorGradient } from '../../models/color-gradient.model';
import { GradientAnimationState } from '../../models/gradient-animation-states.enum';

@Component({
  selector: 'gradient-svg-base',
  template: ''
})
export abstract class SvgBaseComponent implements OnInit, OnDestroy {
    @Input() public colorChangedObservable$!: Observable<ColorGradient>;

    private _colorChangedSubscription$?: Subscription;
    
    public gradient!: ColorGradient;
    public previousGradient?: ColorGradient;
    public animationState: GradientAnimationState = GradientAnimationState.Old;

    ngOnInit(): void {
        this._colorChangedSubscription$ = this.colorChangedObservable$.subscribe({
          next: (color: ColorGradient) => this.handleNewColor(color)
        });
    }

    ngOnDestroy(): void {
        if (this._colorChangedSubscription$) {
            this._colorChangedSubscription$.unsubscribe();
        }
    }

    private handleNewColor(color: ColorGradient): void {
        this.previousGradient = Object.assign({}, this.gradient);
        this.animationState = GradientAnimationState.Old;
        this.gradient = color;
        setTimeout(() => {
          this.animationState = GradientAnimationState.New;
        }, 10);
    }
}
