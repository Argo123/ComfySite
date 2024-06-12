import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorGradient } from '../../../modules/gradient/models/color-gradient.model';
import { GradientModule } from '../../../modules/gradient/gradient.module';

@Component({
    selector: 'comfy-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [GradientModule]
})
export class HeaderComponent {
  @Input() public title?: string;
  @Input() public colorChangedObservable$!: Observable<ColorGradient>;
}
