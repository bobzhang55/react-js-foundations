import Farm from "./Farm";

export  function Farms() {
  return (
    <>
      <Farm farmer="Old McDonald" animals={["pigs", "cows", "chickens"]} />
      <Farm farmer="Mr. Jones" animals={["pigs", "horses", "donkey", "goat"]} />
      
    </>
  );
}
