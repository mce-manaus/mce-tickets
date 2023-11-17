import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { TicketsCardComponent } from './components/tickets-card/tickets-card.component';
import { TicketService } from '../ticket.service';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';


@NgModule({
  declarations: [
    TicketComponent,
    TicketsCardComponent,
    TicketTableComponent,
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [
    TicketService
  ]
})
export class TicketModule { }
