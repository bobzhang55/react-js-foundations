import { useState } from "react";
import ImprovedFarm from "./ImprovedFarm";

export  function ImprovedFarms() {
  const initialFarms = [
    {
      farmer: "Old McDonald",
      animals: ["pigs", "cows", "chickens"],
    },
    {
      farmer: "Mr. Jones",
      animals: ["pigs", "horses", "donkey", "goat"],
    },
  ];
  const [farms] = useState(initialFarms);
  return (
    <>
      {farms
        ? farms.map((farm, index) => (
            <ImprovedFarm
              key={index}
              farmer={farm.farmer}
              animals={farm.animals}
            />
          ))
        : null}
      
    </>
  );
}
