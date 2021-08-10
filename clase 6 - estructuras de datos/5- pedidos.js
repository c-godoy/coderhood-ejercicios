// Tenemos un array con pedidos para nuestro negocio de comidas. 
// Obtener un array con solo aquellos pedidos que incluyan algún condimento extra.

const pedidos = [
    { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
    { id: "1", pedido: "pancho" },
    { id: "1", pedido: "pizza" },
    { id: "1", pedido: "pancho", extras: ["ketchup"] },
    { id: "1", pedido: "empanadas" },
    ]

    const pedidosConExtra = pedidos.filter(pedido => pedido.hasOwnProperty("extras")).map(pedido => pedido);

    console.log(pedidosConExtra)