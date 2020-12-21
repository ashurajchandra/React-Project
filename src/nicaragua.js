import * as React from 'react';
import './App.css';

function NicaraguaCity  (props)  {
    const{ Nicaragua,handleRemove2} = props;
    return (
       
        <div className="single-city">
            <h2>Nicaragua</h2>
    {Nicaragua.map ((item=> <p><h4>{item}</h4>
    <img 
    src="https://t3.ftcdn.net/jpg/03/11/74/34/240_F_311743449_H2xbYofvYIrhjLC8xIm2fq7oAPXasPFz.jpg" 
    alt="remove-icon" onClick={()=>handleRemove2(item)}/> </p>))}
        </div>
    );
};
export default NicaraguaCity;