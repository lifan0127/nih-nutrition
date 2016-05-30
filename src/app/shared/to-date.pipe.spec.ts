import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { ToDate } from './to-date.pipe';

describe('ToDate Pipe', () => {
  beforeEachProviders(() => [ToDate]);

  it('should transform the input', inject([ToDate], (pipe: ToDate) => {
    let dateString = '2011-08-23T04:00:00.000Z';
    let dateObject = new Date(dateString);
    expect(pipe.transform(dateString)).toBe(dateObject);
  }));
});
