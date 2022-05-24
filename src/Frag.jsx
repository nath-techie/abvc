function Frag(props){

  return(
    <div className="frag-element">
    <img src={props.img} className="fragimage" alt="fragrance"/>

    <p className="fragname">{props.name}</p>
    </div>
  );

}

export default Frag;
