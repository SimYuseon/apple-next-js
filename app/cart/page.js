import age from "./data.js";
export default function Cart() {
  return (
    <div>
      <h4>Cart</h4>
      <작명></작명>
      <작명></작명>
    </div>
  );
}

function 작명() {
  return (
    <div>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명{age}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
