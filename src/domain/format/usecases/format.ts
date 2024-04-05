import { IFormat } from '../interface'

export class Format implements IFormat {
  priceMask(params: string): string {
    const valueMoney = params.replace(/[^0-9]/g, '')
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(valueMoney) / 100)

    return formattedValue
  }
}
