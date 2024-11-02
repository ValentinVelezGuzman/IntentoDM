export const handleAPI = async (items)=> {
    const preference = {
        items: items.map((item) => ({
            title: item.name,
            description: item.description,
            picture_url: item.image,
            category_id: "Compras",
            quantity: parseInt(item.quantity),
            currency_id: "COP",
            unit_price: item.discount
                ? parseInt(item.price - item.price * (item.discount * 0.01))
                : parseInt(item.price),
        }))
    };

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer TEST-1166676907673194-110122-77d3a0a5c52787f9f5c6eefc358c7d4d-2070600869`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        })

        const data = await response.json()
        console.log(data)
        return data.init_point;
        

    } catch (error) {
        
    }
}