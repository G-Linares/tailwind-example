import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
            <Card bgColor={"bg-slate-700"} borderColor={'border-slate-700'} plan={"Basic"} memory={"100GB"} rate={'$1.99/Month'} data={'100 GB of storage'}/>
            <Card bgColor={"bg-violet-700"} borderColor={'border-violet-700'} plan={"Standard"} memory={"200GB"} rate={'$3.99/Month'} data={'200 GB of storage'}/>
            <Card bgColor={"bg-slate-700"} borderColor={'border-slate-700'} plan={"Premium"} memory={"2TB"} rate={'$8.99/Month'} data={'2 TB of storage'}/>
        </div>
    </div>
  );
};

export default App;
