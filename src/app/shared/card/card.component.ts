import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: {
    title: string,
    value: number,
    icon?: string,
    headerColor?: string,
    iconColor?: string
  } = {
    title: '',
    value: 0
  }
}
