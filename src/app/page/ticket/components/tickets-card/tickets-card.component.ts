import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets-card',
  templateUrl: './tickets-card.component.html',
  styleUrls: ['./tickets-card.component.scss']
})
export class TicketsCardComponent {

  dataList= [
    {
      title: 'Entradas',
      value: 300,
      icon: 'chart-up-icon',
      headerColor: '#EEFBEF',
      iconColor: '#2CC932'
    },
    {
      title: 'Saidas',
      value: 100,
      icon: 'chart-down-icon',
      headerColor: '#FBEEEE',
      iconColor:'#C92929'
    },
    {
      title: 'Total',
      value: 200,
      icon: 'chart-coins-icon',
      headerColor: '#F1F3FE',
      iconColor: '#4D66EB'
    }
  ]
}
