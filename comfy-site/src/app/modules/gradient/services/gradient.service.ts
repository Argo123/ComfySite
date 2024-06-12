import { Injectable } from '@angular/core';
import { RgbColor } from '../models/rgb-color.model';

@Injectable({
  providedIn: 'root'
})
export class GradientService {
  private readonly _hexColorRegex: RegExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

  public getGradientColors(startColor: string, steps: number, endColor: string = '#FFFFFF'): string[] | null {
      const rgbStart = this.hexToRgb(startColor);
      const rgbEnd = this.hexToRgb(endColor);

      if (!rgbStart || !rgbEnd || steps < 1) {
        return null;
      }

      const result = [];
      let alpha = 0.0;

      for (let i = 0; i < steps; i++) {
          result.push(this.getGradientStep(rgbStart, rgbEnd, alpha));
          alpha += 1.0 / steps;
      }

      return result.reverse();
  }

  private getGradientStep(rgbStart: RgbColor, rgbEnd: RgbColor, alpha: number): string {
      return this.rgbToHex({
          red: Math.round(rgbStart.red * alpha + (1 - alpha) * rgbEnd.red),
          green: Math.round(rgbStart.green * alpha + (1 - alpha) * rgbEnd.green),
          blue: Math.round(rgbStart.blue * alpha + (1 - alpha) * rgbEnd.blue)
      } as RgbColor);
  }

  private hexToRgb(hex: string): RgbColor | null {
      const result = this._hexColorRegex.exec(hex);
      return result ? {
          red: Number(`0x${result[1]}`),
          green: Number(`0x${result[2]}`),
          blue: Number(`0x${result[3]}`)
      } as RgbColor : null;
  }

  private rgbToHex(color: RgbColor): string {
      return `#${this.channelToHex(color.red)}${this.channelToHex(color.green)}${this.channelToHex(color.blue)}`;
  }

  private channelToHex(c: number): string {
      const hexValue = c.toString(16);
      return hexValue.length === 1
        ? `0${hexValue}`
        : hexValue;
  }
}
