import * as React from 'react';

function PortugalCity  (props)  {
    const{Portugal, handleRemove1} = props;
    return (
       
        <div className="single-city">
            <h2>Portugal</h2>
    {Portugal.map ((item=> <p><h4>{item}</h4> 
    <img 
    src="https://t3.ftcdn.net/jpg/03/11/74/34/240_F_311743449_H2xbYofvYIrhjLC8xIm2fq7oAPXasPFz.jpg" 
    alt="remove-icon" onClick={()=>handleRemove1(item)}/></p>))}
        </div>
    );
};
export default PortugalCity;