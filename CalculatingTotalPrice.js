//complete the calculatePrice function
//Do not alter the starter code
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };  
function prices(fruits){
        let total = fruits['price']*fruits['quantity'];
        return total;
    }
    function calculatePrice(goods){
        let price=0;
        for(let i in goods){
            price = price+prices(goods[i]);
                
            
            
        }
        return price;
        //Implement your function here
    }
    console.log(calculatePrice(goods));
    //output : 650