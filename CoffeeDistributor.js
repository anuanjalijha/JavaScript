//Complete the totalorderValue function
// Do not alter the starter code
const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];
  function totalOrderValue(orders, applyDiscount){
      const totalValue = orders.map((order) => {
  const orderValue = order.items.reduce((acc, item) => acc + item.price, 0);
  return applyDiscount(order.discountCode, orderValue);
}).reduce((acc, value) => acc + value, 0);

return totalValue.toFixed(2);

    //Implement your function here
  //The function should return the total price after applying the discount.
  }
  //define your callback function here to calculate the discount.
function applyDiscount(discountCode, value) {
if (discountCode === "COFFEELOVER") {
  return (value - value * 0.10);
} else if (discountCode === "TEALOVER") {
  return (value - value * 0.20);
} else {
  return value;
}
} 