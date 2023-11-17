import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  constructor(private service: TicketService){}
  ngOnInit(): void {
    console.log('init')
    this.service.get().subscribe(res=>{
      console.log(res)
    })

    this.service.plates().subscribe(res=>{
      console.log(res)
    })
  }
}

