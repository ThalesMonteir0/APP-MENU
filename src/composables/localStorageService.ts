export const verifyAddressInLocalStorage = () => {
    let address =  localStorage.getItem('address')

    return address != undefined
}