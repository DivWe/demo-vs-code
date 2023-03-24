var cart = ["saree", "skirt", "top", "salwar"]
console.log(cart);
cart[4] = "sharara";

//---- push ---- (add/insert values from the end)
cart.push("shrug");
console.log(cart);

//---- unshift ---- (add/insert from the beginning)
cart.unshift("croptop");
console.log(cart);

//---- pop ---- (remove/delete element from the end)
cart.pop();
console.log(cart);

//---- shift ---- (remove/delete element from the beginning)
cart.shift();
console.log(cart);

//---- splice ---- (replacing items in-between an array)
cart.splice(1 , 0, "jacket");
console.log(cart);

//----- homework what's slice? -----