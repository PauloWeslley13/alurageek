export class Format {
  priceMask(value: number): string {
    if (isNaN(value)) {
      return 'Valor inválido'
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  formatPrice(value: string): string {
    const valueNumeric = parseFloat(
      value.replace(/[^0-9,-]+/g, '').replace(',', '.'),
    )

    if (isNaN(valueNumeric)) {
      return ''
    }

    const valueMonetary = valueNumeric.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

    return valueMonetary.replace('R$', '').trim()
  }

  formatDecimalValue(params: string): number {
    const cleaned = params.replace(/[^0-9,]/g, '')
    const numeric = cleaned.replace(',', '.')
    const numericValue = parseFloat(numeric)
    return numericValue
  }
}
