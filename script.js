let order_section = document.querySelector(".order");
let orderid = 432;

const orderbtn = document.querySelector(".order_btn");
orderbtn.addEventListener("click", () => {
  let burger = document.getElementById("burger");
  let fries = document.getElementById("Fries");
  let coldDrink = document.getElementById("cold-Drink");

  let orderID = document.querySelector(".order_id");
  orderID.innerText = "order ID: " + orderid++;

  let new_order = document.createElement("div");

  order_section.innerHTML = "";

  let loader = document.querySelector(".loading");
  loader.classList.add("loader");
  let promise1 = new Promise((resolve, reject) => {
    if (burger.checked == true) {
      resolve("burger");
    }
    
  });
  let promise2 = new Promise((resolve, reject) => {
    if (fries.checked == true) {
      resolve("fries");
    }
  });
  let promise3 = new Promise((resolve, reject) => {
    if (coldDrink.checked == true) {
      resolve("cold drink");
    }
  });

  setTimeout(() => {
    promise1.then(value => {
      let image = document.createElement("img");
      image.setAttribute("src", value + ".jpg");
      new_order.appendChild(image);
    });
    promise2.then(value => {
      let image = document.createElement("img");
      image.setAttribute("src", value + ".jpg");
      new_order.appendChild(image);
    });
    promise3.then(value => {
      let image = document.createElement("img");
      image.setAttribute("src", value + ".jpg");
      new_order.appendChild(image);
    });
    setTimeout(() => {
      loader.classList.remove("loader");
      order_section.innerHTML = new_order.innerHTML;
    }, 2000);
  }, 2000);
});
