import './App.css';
import lavender from "./l2.jpg";
import jasmine from "./jasmine.jpg";
import sandal from "./s2.jpg";
import Frag from './Frag.jsx';
import Review from './Review.jsx';


function App() {
  return (
    <div className="App">

      <div class="top">
      <h1 class="head">Yoga Dhipa </h1>
      <h2 class="h2">Agarbatti</h2>
<h3 class="fragname">Meditate with our pleasent fragrance to identify your soul</h3>
        <h2 class="h2">Our Fragrances</h2>

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

      <h2 class="h2">Our Customer reviews</h2>
      <Review
      text="dfgdg"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />
      <Review
      text="dfgd"
      />


      </div>

      <div class="bottom">


      </div>
    </div>

  );
}

export default App;
