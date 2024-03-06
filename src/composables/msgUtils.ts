export const createMsgWPP = (formDadosClient:any) => {
    //futuro fluxo para transoformar array de pedidos em string separado por /n
    const msgBase =  `
    Meu Burguer - APP:\n
    -Status: Aguardando confirmação.\n
    -Total: ${formDadosClient.valor}\n
    -Forma de pagamento: ${formDadosClient.typePayment}\n
    --------------------------------------\n
    Pedido:\n
    -${}\n
    --------------------------------------\n
    Endereço:\n
    -Rua: $${formDadosClient.street}\n
    -Número: ${formDadosClient.number}\n
    -Bairro: ${formDadosClient.neighborhood}`
}