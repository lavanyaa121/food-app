let menu=document.getElementsByClassName("container")[0];

async function getMenu(){
    menu.innerHTML="";
    try{
        let reponse=await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
        let result =await reponse.json();

        for(let i=0;i<result.length;i++){
            let data=result[i];
            let menuOrder=document.createElement("div");
            let innerContent=`
            <img src=${data.imgSrc} alt=${data.name}>
            <p>${data.name}</p>
            <p>$${data.price}</P>`;
            
            menuOrder.className="menu-details";
            menuOrder.innerHTML=innerContent;
            menu.append(menuOrder);
        }
    }
    catch(Error){
        console.log("GetMenu Error", Error);
    }
}


// ---------------Take Order-----------
function TakeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Pizza', 'Tacos', 'Sushi', 'Pasta', 'Fried Chicken', 'Grilled Cheese Sandwich', 'Steak', 'Caesar Salad', 'Fish and Chips', 'Ramen', 'Burrito', 'Pho', 'Pad Thai', 'Gyro', 'Ice Cream', 'Smoothie', 'Apple Pie', 'Chocolate Cake', 'Pancakes', 'Cupcake', 'Crepes', 'Club Sandwich', 'Falafel', 'Curry']
        const order = {
          burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3),
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // Function for order preparation
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function for payment
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to display a thank you message
  function thankyouFnc() {
    alert("Thanking you for eating with us today!");
  }
  
  // Function to handle the tasks sequentially using async/await
  async function place_order() {
    const order = await TakeOrder();
    console.log("Order:", order);
    const orderStatus = await orderPrep();
    console.log("Order status:", orderStatus);
  }
  
  // Run the pay flow
  async function pay(){
    const paymentStatus = await payOrder();
    console.log("Payment status:", paymentStatus);
    thankyouFnc();
  }
 


window.addEventListener('load', getMenu);
document.getElementById('placeOrder').addEventListener('click', place_order);
document.getElementById('payOrder').addEventListener('click', pay);