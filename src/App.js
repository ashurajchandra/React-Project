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
  handleOnChange1 =(e)=>{
   const name =e.target.name;
   const checked = e.target.checked;
   const value = this.state.Portugal;
   console.log('value,name,checked')

   if(!checked){
     const newValue= value.filter(item=> item !== name);
      this.setState({
         Portugal:[newValue]
      })
   }
   else{
      this.setState({
         Portugal:[...value,name]
      })
   }
  }
  handleOnChange2 =(e)=>{
   const name =e.target.name;
   const checked = e.target.checked;
   const value = this.state.Nicaragua;
   console.log('value,name,checked')

   if(!checked){
     const newValue= value.filter(item=> item !== name);
      this.setState({
         Nicaragua:[newValue]
      })
   }
   else{
      this.setState({
         Nicaragua:[...value,name]
      })
   }

}
handleOnChange3 =(e)=>{
   const name =e.target.name;
   const checked = e.target.checked;
   const value = this.state.Marshall;
   console.log('value,name,checked')

   if(!checked){
     const newValue= value.filter(item=> item !== name);
      this.setState({
         Marshall:[newValue]
      })
   }
   else{
      this.setState({
         Marshall:[...value,name]
      })
   }

}

handleRemove1=(e,item)=>{
   // e.preventDefault()
  const{Portugal} = this.state;
//   const filteredCity= city.filter((item=> item !== ))
      const filteredValue = Portugal.filter((Item=> Item === item));
      console.log('filteredValue', filteredValue);
      this.setState({
         Portugal: [filteredValue]
      })

}
handleRemove2=(e,item)=>{
   e.preventDefault();
   const {Nicaragua} = this.state;
   const filteredValue = Nicaragua.filter((Item=> Item === item));
   console.log('Nicaragua filteredValue', filteredValue);
   this.setState({
      Nicaragua: [filteredValue]
   })
}
handleRemove3=(e, item)=>{
   e.preventDefault();
   const {Marshall} = this.state;
   const filteredValue = Marshall.filter((Item=> Item === item));
   console.log('Marshall filteredValue', filteredValue);
   this.setState({
      Marshall: [filteredValue]
   })
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
               <input type="checkbox" name="Obasey Chiddy" id="Obasey Chiddy" onChange={this.handleOnChange2}/>
               <label for="task1">Obasey Chiddy</label>
            </div>
           
            <div>
               <input type="checkbox" name="Xienie Dolezelova" id="Xienie Dolezelova" onChange={this.handleOnChange2}/>
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
