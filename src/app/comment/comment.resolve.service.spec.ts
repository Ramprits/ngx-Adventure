/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Comment.resolveService } from './comment.resolve.service';

describe('Service: Comment.resolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Comment.resolveService]
    });
  });

  it('should ...', inject([Comment.resolveService], (service: Comment.resolveService) => {
    expect(service).toBeTruthy();
  }));
});