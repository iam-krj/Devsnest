import React from "react";
import "./App.css";
import Fart from "./Fart";
// import Fart from "./Fart";

function App(){
    return(
        <div className="App">
            
            {/* <Fart food="Hello" calories="34" />
            <Fart food="Hello" calories="34" />
            <Fart food="Hello" calories="34" /> */}
            <div className=" Title">Calorie Table</div>
            
       <div className="Fart"> <Fart title="Pizza" calorie="A" />     </div>
       <div className="Fart"> <Fart title="Burger" calorie="B" /></div>
       <div className="Fart"> <Fart title="Croissant" calorie="C" /></div>
       <div className="Fart"> <Fart title="Dumplings" calorie="D" /></div>
       <div className="Fart"> <Fart title="Momos" calorie="E" /></div>
       <div className="Fart"> <Fart title="Wine" calorie="F" /></div>
        {/* <Fart tittle="Noodles" calorie="69" /> */}

            </ div>

    );
};

export default App