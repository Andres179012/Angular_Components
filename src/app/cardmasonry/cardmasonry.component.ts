import { Component } from '@angular/core';

@Component({
  selector: 'app-cardmasonry',
  templateUrl: './cardmasonry.component.html',
  styleUrls: ['./cardmasonry.component.css'],
})
export class CardmasonryComponent {
  cardItems = itemCard;
}

const itemCard = [
  {
    icon: 'clock',
    modulo: 'Check In',
    ingreso: true,
    labelModulo: 'Deduccion Total',
    dataParametros: [
      {
        titulo: 'Dias Contados',
        value: '10',
      },
      {
        titulo: 'SP Horas',
        value: '0',
      },
      {
        titulo: 'SP Minutos',
        value: '0.83',
      },
    ],
  },
  {
    icon: 'cutlery',
    modulo: 'Almuerzos',
    ingreso: true,
    labelModulo: 'Deduccion Total',
    dataParametros: [
      {
        titulo: 'Total Ordenes',
        value: '7',
      },
      {
        titulo: 'Subtotal Facturado',
        value: '32.1',
      },
      {
        titulo: 'Total Subsidio',
        value: '9.59',
      },
    ],
  },
  {
    icon: 'times-circle',
    modulo: 'Ausencias',
    ingreso: true,
    labelModulo: 'Deduccion Total',
    dataParametros: [
      {
        titulo: '# Ausencias',
        value: '2',
      },
    ],
  },
  {
    icon: 'money-bill-wave',
    modulo: 'Prestamos',
    ingreso: true,
    labelModulo: 'Monto A Deducir',
    dataParametros: [
      {
        titulo: '# Prestamos',
        value: '1',
      },
    ],
  },
  {
    icon: 'marker',
    modulo: 'Tienda',
    ingreso: true,
    labelModulo: 'Monto A Deducir',
    dataParametros: [
      {
        titulo: '# Tienda',
        value: '1',
      },
    ],
  },
  {
    icon: 'user',
    modulo: 'Bonos',
    ingreso: false,
    labelModulo: 'Total Bonos',
    dataParametros: [
      {
        titulo: 'Registro de Bonos',
        value: '1',
      },
    ],
  },
  {
    icon: 'clock',
    modulo: 'Horas Extras',
    ingreso: false,
    labelModulo: 'Total Horas Extras',
    dataParametros: [
      {
        titulo: 'Horas Extras',
        value: '1',
      },
    ],
  },
];
