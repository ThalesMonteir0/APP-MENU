export const formatNumberToStringCurrency = (money: number): string =>  {
    let moneyString = money.toString()
    let currencyFormated = moneyString.replaceAll('.',',')
    
    return `R$ ${currencyFormated.split(",")[1].length === 1 ? currencyFormated+'0' : currencyFormated }`
}

export const formatStringToCurrency = (value: number) => { 
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}