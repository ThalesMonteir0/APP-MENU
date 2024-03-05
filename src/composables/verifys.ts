export const verifyLengthCep = (cep: string) => {
    let cepWithOnlyNumbers = cep.replace(/\D/g, '')
    return cepWithOnlyNumbers.length === 8
}