import './App.css';


let name = "Parth Srivastava";
let a = 5;
let b = 7;
const variable = true;
let externalHTML = "<b>This is bold</b>";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <p>This is {name} and this is sum {a + b} and this is external HTML {externalHTML} which can't be parsed in HTML for security purpose</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magnam accusamus! Nulla velit a inventore magni porro id eligendi commodi molestiae, placeat totam corrupti aut eaque, natus aperiam reiciendis dolores?</p>
      </div>
      <input type="text" className='input-box' class="inputClass" />
      <div>
        <h1 class="welcome">{variable && "Hello there!"}</h1>
      </div>
    </>

  );
}

export default App;
