import * as React from 'react';

function MarshallCity  (props)  {
    const{Marshall, handleRemove3} = props;
    return (
       
        <div className="single-city">
            <h2>Marshall Island</h2>
    {Marshall.map ((item=> <p id="marshall-item"><h4>{item}</h4> 
    <img 
    src="https://t3.ftcdn.net/jpg/03/11/74/34/240_F_311743449_H2xbYofvYIrhjLC8xIm2fq7oAPXasPFz.jpg" 
    alt="remove-icon" onClick={()=>handleRemove3(item)}/></p>))}
        </div>
    );
};
export default MarshallCity;