export function getMessageTelegram(dataProducts, dataUser) {
    return `
Name: ${dataUser.name}
Surname: ${dataUser.surname}
Telephon: ${dataUser.number}
Address: ${dataUser.address}
Index: ${dataUser.index}
totalPrice: ${dataProducts.totalPrice} €
${dataProducts.products.map((product) => `
Id: ${product._id}
Title: ${product.title}
Size: ${product.selectedSize}
Price: ${product.price} €
Gender: ${product.gender}
Amount: ${product.amount}
`).join('')}`
}