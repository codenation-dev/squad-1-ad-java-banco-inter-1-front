import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  closeResult: string;
  @Input() public summary: string;
  @Input() public title: string;
  @Input() public details: string;
  @Input() public dateLog: string;
  @Input() public ipLog: string;
  @Input() public environmentLog: string;
  
  @Output() respSummary = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  feedback() {
    console.log('Resposta para o component pai', this.respSummary.emit("retorno"));
  }

  open(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
