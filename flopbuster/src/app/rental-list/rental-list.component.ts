import { Component, Input, Output,  EventEmitter } from "@angular/core";


@Component({
    selector: 'app-rental-list',
    templateUrl: 'rental-list.component.html',
    styleUrls: []
})
export class RentalListComponent {

   @Input() rentalList: any;

   @Output() clearRentalListEvent = new EventEmitter;
   
   clearRentalList() {
       this.clearRentalListEvent.emit('');
   }
}