import React, {Component} from 'react';

class App extends Component(){
  constructor(){
    super()

    this.state = {
        firsName: '',
        lastName: '',
        age: '',
        gender: '',
        destination: '',
        dietaryRestricitons: {
          isVegan:false,
          isKosher:false,
          isLactoseFree:false
        }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === 'checkbox' ?
      this.setState(prevState => {
        return{
          dietaryRestricitons: {
            ...prevState.dietaryRestricitons,
            [name] : checked
          }
        }
      })
      :
        this.setState({
          [name] : value
         })
  }


  render(){
    return(
      <div>
        <form>
          <input
             name= "firstName" 
             value={this.state.firstName}
             onChange={this.handleChange} 
             placeholder="first name"/>
          <input 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
            placeholder="last name"/>
          <input 
            name="age" 
            value={this.state.age}
            onChange={this.handleChange} 
            placeholder="age"/>

            <label>
              <input 
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
              
              />Male

              <input 
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}

              />Female
            </label>

            <select value={this.state.destination}
              name="destination"
              onChange={this.handleChange}
              > 
              <option value="">Please choose destination</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Aussir</option>
              <option value="China">Gina</option>
              <option value="Costa Rica">Rica</option>
            </select>

            <label>
              <input
                type="checkbox"
                name="isVegan"
                onChange={this.handleChange}
                checked={this.state.dietaryRestricitons.isVegan}
              /> Vegan?
              <input
                type="checkbox"
                name="isKosher"
                onChange={this.handleChange}
                checked={this.state.dietaryRestricitons.isKosher}
              /> Kosher?
              <input
                type="checkbox"
                name="isLactoseFree"
                onChange={this.handleChange}
                checked={this.state.dietaryRestricitons.isLactoseFree}
              /> Lactose Free?


            </label>



        <button>Submit</button>

        </form>
        <h2>entered information</h2>
        <p>your name: {this.state.firsName} {this.state.lastName} </p>
        <p>your age: {this.state.age} </p>
        <p>your gender: {this.state.gender} </p>
        <p>your destination:{this.state.destination} </p>
        <p>your dietary restrictions: {this.state.dietaryRestricitons } </p>
      
      </div>
    )
  }



}

export default App