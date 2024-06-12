import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomColorServiceFactory } from '../../services/random-color-service.factory';
import { ColorServiceSource } from '../../models/color-service-source.enum';
import { RandomColorBaseService } from '../../services/random-color-base.service';
import { Observable, map } from 'rxjs';
import { ColorGradient } from '../../../modules/gradient/models/color-gradient.model';
import { GradientService } from '../../../modules/gradient/services/gradient.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'comfy-color-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.scss'
})
export class ColorFormComponent implements OnInit {
    @Output() public colorChanged = new EventEmitter<ColorGradient>();

    private readonly _numberOfGradientSteps: number = 3;
    private _colorService: RandomColorBaseService;

    public isApiSourceSelected: boolean = false;
    public gradient: ColorGradient;

    constructor(
      private _colorServiceFactory: RandomColorServiceFactory,
      private _gradientService: GradientService
    ) {
        this._colorService = this._colorServiceFactory.getColorService(ColorServiceSource.Local);
        this.gradient = this.getGradient(environment.baseColor);
    }

    ngOnInit(): void {
        this.colorChanged.emit(this.gradient);
    }

    public getColorButtonClick(): void {
        this.getColor().subscribe({
          next: (value: ColorGradient) => {
            this.gradient = value;
            this.colorChanged.emit(value);
          }
        });
    }

    public changeColorSource() {
        this.isApiSourceSelected = !this.isApiSourceSelected;
        const source = this.getColorSource();
        this._colorService = this._colorServiceFactory.getColorService(source);
    }

    private getColor(): Observable<ColorGradient> {
      return this._colorService.getColor()
          .pipe(map((value: string): ColorGradient => this.getGradient(value)));
    }

    private getGradient(baseColor: string): ColorGradient {
        const gradient = this._gradientService.getGradientColors(baseColor, this._numberOfGradientSteps);
        if (!gradient) {
            throw 'Invalid color as input!';
        }

        return {
            baseColor: baseColor,
            secondaryColor: gradient[0],
            tertiaryColor: gradient[1]
        }  as ColorGradient; 
    }

    private getColorSource(): ColorServiceSource {
        return this.isApiSourceSelected
            ? ColorServiceSource.Api
            : ColorServiceSource.Local;
    }
}
