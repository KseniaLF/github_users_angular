import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IRepos } from 'src/app/models/repos';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-repos',
  templateUrl: './app-repos.component.html',
  styleUrls: ['./app-repos.component.css'],
  standalone: true,
})
export class AppReposComponent {
  @Input() repo: IRepos;

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.repo = this.repo;
  }
}
