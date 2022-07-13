import React from 'react';
import ListItem from "./ListItem";

const Card = ({plan, memory, rate, borderColor,data, bgColor}) => {
  return (
    
        <div className={`${bgColor} rounded-xl text-white`}>
          <div className={`p-8 mx-3 mt-3 rounded-t-xl bg-slate-800`}>
            <div className="text-center uppercase">{plan}</div>
            <h2 className="mt-10 font-serif text-5xl text-center">{memory}</h2>
            <h3 className="mt-2 text-center">{rate}</h3>
            <div className=" flex justify-center">
              <a
                href="/"
                className={`inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:border-violet-800 duration-200`}
              >
                Purchase
              </a>
            </div>
          </div>
          <div className={`${borderColor} border-t`}></div>
          <div className={`p-8 mx-3 mb-3 rounded-b-xl bg-slate-800`}>
            <ListItem content={data}/>
            <ListItem content={'Option to add members'}/>
            <ListItem content={'Extra member benefits'}/>
          </div>
        </div>
  )
}

export default Card