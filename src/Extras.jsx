function Extras(props){

return(
  <div className="innerdiv">
  <img src={props.img} className="extraimg" />
  <p className="extratext">{props.text}</p>
  </div>
);
}


export default Extras;
