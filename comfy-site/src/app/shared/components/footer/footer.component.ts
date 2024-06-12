import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorGradient } from '../../../modules/gradient/models/color-gradient.model';
import { GradientModule } from '../../../modules/gradient/gradient.module';

@Component({
  selector: 'comfy-footer',
  standalone: true,
  imports: [GradientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() public footerMessage?: string;
  @Input() public colorChangedObservable$!: Observable<ColorGradient>;
}
