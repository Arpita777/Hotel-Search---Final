import React from 'react'
import Details from './Details'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Restuarent extends React.Component{
  
  state={
    displayQuestions: false
  }
  displayQuestion = () => {
    
    this.setState({
        displayQuestions: !this.state.displayQuestions
    })
}
  
  render(){
    let questions = null;
    if ( this.state.displayQuestions ) {
     questions = (
     <div>
          
               <Details title={this.props.item} />
       
     </div>
     )
    }

    
    
     

    return(   
      <table>
      
      <tbody>
        <tr>
          <td>
            <h1>{this.props.item.RestaurantName}</h1>
          </td>
          <td>
            {this.props.item.Cuisines}
          </td>
          <td>
            <button className="btn" onClick={this.displayQuestion}>Show the List</button>
          </td> 
         
        </tr>
         <tr>
            {questions}
          </tr>
        
      </tbody>
    </table>
    )
  }
}

 
export default Restuarent
