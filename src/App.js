import React from "react";

import Box from "./Components/Box";
import { DanMainText, DanSeconText } from "./Util/DummyData";

import daniel from "./Assets/image-daniel.jpg";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-10">
      <div className="text-white">
        <Box pic={daniel} mainText={DanMainText} secondaryText={DanSeconText}/>
      </div>
    </div>
  );
};

export default App;
