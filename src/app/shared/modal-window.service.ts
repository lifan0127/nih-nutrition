import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ModalWindowService {
  private modalWindowInputSource = new Subject<any>();
  private modalWindowStatusSource = new Subject<boolean>();
  
  modalWinodwInput$ = this.modalWindowInputSource.asObservable();
  modalWindowStatus$ = this.modalWindowStatusSource.asObservable();

  updateInput(input: any) {
    this.modalWindowInputSource.next(input)
  }
  
  updateStatus(status: boolean) {
    this.modalWindowStatusSource.next(status)
  }

}
