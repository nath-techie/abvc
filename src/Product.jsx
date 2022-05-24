function Product(props){
return(
  <div class="proddiv">
  <img src={props.img} class="product-photo" alt="product photo"/>
  <p class="price">{props.price}</p>
  </div>
);
}

export default Product;
