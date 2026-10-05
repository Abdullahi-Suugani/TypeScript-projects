let productName: string = "Laptop";
let price: number = 999.99;
let discountAvailable: boolean = true;

console.log("Product Name:", productName);
console.log("Price:", price);
console.log("Discount Available:", discountAvailable);

productName = "Samsung Phone";
price = 599;
discountAvailable = false;

console.log("Updated Values:");
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("Discount Available:", discountAvailable);

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

const finalPrice = getDiscount(100, 0.2);

console.log("Discount Example:");
console.log("Original Price: $100");
console.log("Discount: 20%");
console.log("Final Price:", finalPrice);
