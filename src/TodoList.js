import React, { Component } from 'react';
import './style.scss';

class TodoList extends Component {
	
componentDidUpdate() {
	 // this.props.inputElement.current.focus()
  }  
	render() {
		return (
		 <div className="todoListMain">
		  <div className="header">
			<form onSubmit={this.props.addItem}>
			  <input className="musicInput" placeholder="Property Type" ref={this.props.inputElement} value={this.props.currentItem.text} onChange={this.props.handleInput}/>
              <button className="submit" type="submit">Add Property Type</button>			
 			</form>
		  </div>
		 </div>
		);
	}
}

export default TodoList;