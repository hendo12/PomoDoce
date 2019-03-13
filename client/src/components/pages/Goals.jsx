import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'

export default class Goals extends Component {

  // componentDidMount(){

  //   console.log('Goals page')
  //   console.log(api.getLocalStorageUser())

  //   Axios.get('http://localhost:5000/api/whatever',).then(res=>{
  //     // console.log(res)
  //   })

  // }

  deleteGoal = (key) => {
    const filteredItems = this.props.allItems.filter(item => {
      console.log('Delete button')
      return item.key !== key
    })
    this.setState({
      items:filteredItems,
    })
  }

  createGoals(item){
    return (
      <li 
        key={item.key}> 
        {item} 
        <button onClick={(item) => this.deleteGoal(item)}>Delete</button>
      </li>
    )
  }



  render() { 
    const allItems = this.props.allItems;
    const listItems = allItems.map(this.createGoals)  

    return (
      <div className="Goals">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input 
            placeholder="Goal"
            name="item"
            onChange={this.props.handleInput}
            />
            <button type="submit"> Add Goal </button>
          </form>
          <div className="currentGoals">
            <h3>Current Goals</h3>
            <ol>
              {listItems}
            </ol>
            
          </div>
        </div>
      </div>
    );
  }
}