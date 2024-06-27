import React, { useState } from 'react'
import Card from './Card';
import './UrbanClap.css'

const data = [
    {
    title:"Fan repair",
    price:109
},
{
    title:"Tap repair",
    price:49
},
{
    title:"Flush Tank repair",
    price:82
    },
    {
    title:"Jet sparay (Installation/repair)",
    price:46
    },
];

const UrbanClap = () => {

    let query = "";
    const [searchedData, setSearchedData] =  useState(data);

    const onChangeHandler = (e)=>{
        let updatedData = [];
        query = e.target.value;
        if(query === '')
        {
            setSearchedData(data);
        }else{
            data.forEach((e)=>{
                if(e.title.toLowerCase().includes(query.toLowerCase())){
                    updatedData.push(e);
                }
            });
            setSearchedData(updatedData);
        }
    }

  return (
    <div>
        <form>
            <input type="text" onChange={onChangeHandler} placeholder='Search here...'/>
        </form>
        <h3><pre>Our Services</pre></h3>
        <div className="content">
            { searchedData.length !== 0?( searchedData.map((item,index)=>{
                return (<Card key={index} element={item}/>);
            })):(<h4>No Services Found.</h4>)}
        </div>
        <div className="cart"></div>
    </div>
  )
}

export default UrbanClap
