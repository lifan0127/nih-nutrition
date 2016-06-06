import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SimpleTestService } from './simple-test.service';

describe('SimpleTest Service', () => {
  beforeEachProviders(() => [SimpleTestService]);

  it('should ...',
      inject([SimpleTestService], (service: SimpleTestService) => {
    expect(service).toBeTruthy();
  }));
});
