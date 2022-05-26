
const SideNav = (props) => {
return (
<div className="sidenav" style={{width:props.width}}>
<button onClick={props.close}id="closebutton">→</button>
   <a href="#1" className="sidelinks">How we are special?</a><br />
   <a href="#2" className="sidelinks">Our Fragrances</a><br />
   <a href="#3" className="sidelinks">Customer Review</a><br />
   <a href="#4" className="sidelinks">Our Products</a><br />
   <a href="#5" className="sidelinks">Contact Us</a>

</div>
 );
};
export default SideNav;
