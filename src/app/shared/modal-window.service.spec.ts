import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ModalWindowService } from './modal-window.service';

describe('ModalWindow Service', () => {
  beforeEachProviders(() => [ModalWindowService]);

  it('should ...',
      inject([ModalWindowService], (service: ModalWindowService) => {
    expect(service).toBeTruthy();
  }));
});
