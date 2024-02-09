type PriceMaskProps = { value: string }

export const priceMask = ({ value }: PriceMaskProps) => {
  const valueMoney = value.replace(/[^0-9]/g, '')
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valueMoney) / 100)

  return formattedValue
}
