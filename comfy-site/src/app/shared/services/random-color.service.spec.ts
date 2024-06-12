import { TestBed } from '@angular/core/testing';

import { RandomColorService } from './random-color.service';

describe('RandomColorService', () => {
    let service: RandomColorService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = new RandomColorService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return hex color', () => {
        service.getColor().subscribe((result) => {
          expect(result[0]).toEqual("#");
          expect(result.length).toEqual(7);
        });
    });
});
