import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModal = new BehaviorSubject<boolean>(false);
  private modalType = new BehaviorSubject<string>('');

  public showModal$ = this.showModal.asObservable();
  public modalType$ = this.modalType.asObservable();

  constructor() {}

  setShowModal(val: boolean) {
    this.showModal.next(val);
  }

  setModalType(val: string) {
    this.modalType.next(val);
  }

  setModal(type: string, show: boolean) {
    this.setModalType(type);
    this.setShowModal(show);
  }
}
