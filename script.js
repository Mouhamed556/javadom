class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
class ShoppingCartItem {
  constructor(product, qte) {
    this.product = product;
    this.qte = qte;
  }

  claculprice() {
    return this.product.price * this.qte;
  }
}
class Cart {
  constructor() {
    this.cartItems = [];
  }
  addItem(Item) {
    this.cartItems.push(Item);
    console.log("Item was added");
  }
  total() {
    const total = this.cartItems.reduce(
      (total, Item) => total + Item.claculprice(),
      0
    );
    console.log(`Total : ${total}`);
  }

  removeItem(Id) {
    const i = this.cartItems.findIndex((item) => item.product.id === Id);
    if (i !== -1) {
      this.cartItems.splice(index, 1);
      console.log("Item was removed");
    } else {
      console.log("Item not found in the cart.");
    }
  }
  displayItems() {
    this.cart.forEach((elt, i) =>
      console.log(
        `${i + 1}/${elt.product.name} | ${elt.product.price} - ${elt.qte}`
      )
    );
  }
}
const product1 = new Product("du3sjcNvytO", "Sweater", 50);
const product2 = new Product("iBrmZno56", "Long Coat", 150)
const product3 = new Product("xsS3SjD", "Denim Jacket", 100);
// items 
const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);
const item3 = new ShoppingCartItem(product3, 3);
const t1 = item1.claculprice();
const t2 = item2.claculprice();
const t3 = item3.claculprice();
const  myCart = new Cart();
myCart.addItem(item1);
myCart.addItem(item2);
myCart.addItem(item3);
myCart.total();
myCart.removeItem("du3sjcNvytO");

