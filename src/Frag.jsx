function Frag(props){

  return(
    <div>
    <img src={props.img} class="fragimage" />
    <p class="fragname">{props.name}</p>
    </div>
  );

}

export default Frag;
