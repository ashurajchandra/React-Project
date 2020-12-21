import React, { Component } from 'react';
import Navbar from './Navbar';
import City from './City';

class App extends Component {
  constructor(){
    super();
    this.state={
      Portugal:[],
      Nicaragua: [],
      Marshall: [],
    }
  }


  render() {
    const{Portugal,Nicaragua,Marshall}= this.state;
    return (
      <div className="App">
        
        <Navbar/>
        <form className="form-component">
        <h2> Portugal</h2>
            <div>
               <input type="checkbox" name="Aasiya jayavant" id="Aasiya jayavant" onChange={this.handleOnChange1}/>
               <label for="task1">Aasiya jayavant</label>
            </div>
          
            <div>
               <input type="checkbox" name="Luvleen Lawrence" id="Luvleen Lawrence" onChange={this.handleOnChange1}/>
               <label for="task1">Luvleen Lawrence</label>
            </div>
          
            <div>
               <input type="checkbox" name="Rey Mebourne" id="Rey Mebourne" onChange={this.handleOnChange1}/>
               <label for="task1">Rey Mebourne</label>
            </div>
           
            <div>
               <input type="checkbox" name="Cayla Brister" id="Cayla Brister" onChange={this.handleOnChange1}/>
               <label for="task1">Cayla Brister</label>
            </div>

            <h2> Nicaragua</h2>
            <div>
               <input type="checkbox" name="Devedaas Nandi" id="Devedaas Nandi" onChange={this.handleOnChange2}/>
               <label for="task1">Devedaas Nandi</label>
            </div>
           
            <div>
               <input type="checkbox" name="Eziquiel Dengra" id="Eziquiel Dengra" onChange={this.handleOnChange2}/>
               <label for="task1">Eziquiel Dengra</label>
            </div>
           
            <div>
               <input type="checkbox" name="Obasey Chiddy" id="Aasiya jayavant" onChange={this.handleOnChange2}/>
               <label for="task1">Obasey Chiddy</label>
            </div>
           
            <div>
               <input type="checkbox" name="Xienie Dolezelova" id="Aasiya jayavant" onChange={this.handleOnChange2}/>
               <label for="task1">Xienie Dolezelova</label>
            </div>

            <h2> Marshall Islands</h2>
            <div>
               <input type="checkbox" name="Aaron Almaraz" id="Aaron Almaraz" onChange={this.handleOnChange3}/>
               <label for="task1">Aaron Almaraz</label>
            </div>
            {/* <h2> Nicaragua</h2> */}
            <div>
               <input type="checkbox" name="Zelena Denisova" id="Zelena Denisova" onChange={this.handleOnChange3}/>
               <label for="task1">Zelena Denisova</label>
            </div>
            {/* <h2> Nicaragua</h2> */}
            <div>
               <input type="checkbox" name="Xienie Dolezelova" id="Xienie Dolezelova" onChange={this.handleOnChange3}/>
               <label for="task1">Xienie Dolezelova</label>
            </div>
        </form>

      <div className="city-selected">
         {Portugal.length == 0 && Nicaragua.length == 0 && Marshall.length == 0 ? 
         <h3 >No Value Selected</h3> :
         <City
         Portugal={Portugal}
         Nicaragua={Nicaragua}
         Marshall={Marshall}
         handleRemove1={this.handleRemove1}
         handleRemove2={this.handleRemove2}
         handleRemove3={this.handleRemove3}
         />}
   
      </div>
      </div>
    );
  }
}

export default App;
