import './App.css';
import lavender from "./pics/l2.jpg";
import jasmine from "./pics/jasmine.jpg";
import sandal from "./pics/s2.jpg";
import pathi4 from "./pics/pathi4.jpg";
import pathi2 from "./pics/pathi2.jpg";
import smell from "./pics/smell.jpg";
import click from "./pics/click.jpg";
import p1 from "./pics/p1.jpg";
import {useState} from "react";

import Frag from './Frag.jsx';
import Review from './Review.jsx';
import Extras from './Extras.jsx';
import Product from './Product.jsx';
import Sidenav from './Sidenav.jsx';


function App() {
  const [wid, setWid] = useState('0%');
  const open=()=>{setWid('25%');}
  const closeNav=()=>{setWid('0%');}

  return (
    <div className="App">
<div class="top">
<h1 class="head">Yoga Dhipa Agarbatti</h1>
<button id="openbutton" onClick={open}>≡</button>
<h3 class="headline">Meditate with our pleasent fragrance to identify your soul</h3>
<div class="side">

<Sidenav
width={wid}
close={closeNav}/>
</div>
<h2 class="h2" id="1">We are Special because...</h2>
</div>
<div class="extradiv">
<Extras
img={click}
text="Pure natural powders"/>

<Extras
img={pathi2}
text="No harmful chemicals  "/>

<Extras
img={pathi4}
text="We focus on quality"/>
</div>

<h2 class="h2" id="2">Our Fragrances</h2>
<div class="fragrance">
<Frag
img={lavender}
name="Lavender"
/>

<Frag
img={jasmine}
name="Jasmine"
/>

<Frag
img={sandal}
name="Sandal"
/>
</div>

<h2 class="h2" id="3">Our Customer reviews</h2>
<div class="review">

<Review
text="Quality is exceeding the branded ones, really a goood product "/>
<Review
text="Smell is so pleasant, didnt expected this quality from a small scale "
/>
<Review
text="Lasting for nearly an hour with pleasant fragrance, great quality"
/>
<Review
text="No smell outside the box, but inside the batti smell is really upto the mark "
/>

</div>
<h2 class="h2" id="4">Our Products</h2>
<div class="products">
<Product
img={p1}
price="Rs.12"
/></div>

<div class="bottom">
<h2 class="h2" id="5"> Contact Us</h2>
<a class="link"href="https://www.google.com/maps/place/8%C2%B041'46.9%22N+77%C2%B043'59.9%22E/@8.6963485,77.7311027,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x3f1ac2493773f55!8m2!3d8.6963485!4d77.7332914?hl=en" target="_blank" > Our Location 📍 </a>
<p class="address">Address :  Valli yogadhipa ,C 36/7 , NGO 'B' Colony , Tirunelveli- 627007</p>
<p class="address">Phone   :   8754731398 , 9677593825</p>
</div>
</div>

  );
}

export default App;
