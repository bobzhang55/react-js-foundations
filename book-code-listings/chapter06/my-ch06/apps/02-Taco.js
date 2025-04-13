function App() {
    // return <Taco meat="chicken" produce={['cabbage', 'radish', 'cilantro']} sauce="hot" />
    return Taco({ meat: "chicken", produce: ['cabbage', 'radish', 'cilantro'], sauce: "hot" });
}

function Taco(props) {
    return (<p>Your {props.sauce} {props.meat} taco will be ready shortly.</p>)
}

export default App;