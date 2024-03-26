import { Injectable } from '@nestjs/common';
import { CreateDatePayloadDto } from './dto/create-date-payload.dto';

@Injectable()
export class DatePayloadService {
  payload({ date }: CreateDatePayloadDto) {
    return this.formatDate(date);
  }

  private formatDate(dateString: string): string {
    const months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ];
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = months[parseInt(dateParts[1], 10) - 1];
    const day = parseInt(dateParts[2], 10);

    return `${this.numberToSpanish(day)} de ${month} de ${this.numberToSpanish(year)}`;
  }

  private numberToSpanish(n: number): string {
    const units = [
      'cero',
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve',
    ];
    const teens = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve',
    ];
    const tens = [
      '',
      '',
      'veinte',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa',
    ];
    const hundreds = [
      '',
      'ciento',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos',
    ];

    if (n < 10) return units[n];
    if (n >= 10 && n < 20) return teens[n - 10];
    if (n >= 20 && n < 100) {
      return (
        tens[Math.floor(n / 10)] + (n % 10 === 0 ? '' : ' y ' + units[n % 10])
      ).trim();
    }
    if (n === 100) return 'cien';
    if (n > 100 && n < 1000) {
      return (
        hundreds[Math.floor(n / 100)] +
        (n % 100 === 0 ? '' : ' ' + this.numberToSpanish(n % 100))
      ).trim();
    }
    if (n >= 1000 && n < 2000)
      return (
        'mil' + (n % 1000 === 0 ? '' : ' ' + this.numberToSpanish(n % 1000))
      );
    if (n >= 2000 && n < 10000) {
      return (
        units[Math.floor(n / 1000)] +
        ' mil' +
        (n % 1000 === 0
          ? ''
          : (n % 1000 < 100 ? ' ' : ' ') + this.numberToSpanish(n % 1000))
      );
    }
    return n.toString();
  }
}
