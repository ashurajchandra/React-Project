// @flow 
import * as React from 'react';
import NicaraguaCity from './nicaragua';
import MarshallCity from './marshall';
import PortugalCity from './portugal';

function City  (props)  {
    const{Portugal, Nicaragua, Marshall,handleRemove1, handleRemove2, handleRemove3} = props;
    return (
       
        <div>
            {Portugal.length >0 && <PortugalCity Portugal={Portugal} handleRemove1={handleRemove1}/>}
            {Nicaragua.length>0 && <NicaraguaCity Nicaragua={Nicaragua} handleRemove2={handleRemove2}/>}
            {Marshall.length>0 && <MarshallCity Marshall={Marshall} handleRemove3 = {handleRemove3}/>}
        </div>
    );
};
export default City;