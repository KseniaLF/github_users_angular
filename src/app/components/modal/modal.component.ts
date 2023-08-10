import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IRepos } from 'src/app/models/repos';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // standalone: true,
})
export class ModalComponent {
  @Input() repo: IRepos;

  constructor(public activeModal: NgbActiveModal) {}
}
