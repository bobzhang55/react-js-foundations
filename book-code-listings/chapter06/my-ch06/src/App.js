import logo from './logo.svg';
import './App.css';

function App() {
  // return <Taco meat="chicken" produce={['cabbage', 'radish', 'cilantro']} sauce="hot" />
  return Taco({ meat: "chicken", produce: ['cabbage', 'radish', 'cilantro'], sauce: "ho0t" });
}

function Taco(props) {
  return (<p>Your {props.sauce} {props.meat} taco will be ready shortly.</p>)
}

export default App;
