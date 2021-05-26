import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modal = new Subject<boolean>();
  private modalType = new Subject<string>();

  public $modal = this.modal.asObservable();
  public $modalType = this.modalType.asObservable();

  constructor() {}

  setModal(val: boolean) {
    this.modal.next(val);
  }

  setModalType(val: string) {
    this.modalType.next(val);
  }
}
