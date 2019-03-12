import React, { Component } from 'react';
import './style.scss';

class TodoList extends Component {
componentDidUpdate() {
	  this.props.inputElement.current.focus()
  }  
	render() {
		return (
		 <div className="todoListMain">
		  <div className="header">
			<form onSubmit={this.props.addItem}>
			  <input className="musicInput" placeholder="Music Name" ref={this.props.inputElement} value={this.props.currentItem.text} onChange={this.props.handleInput}/>
              <button className="submit" type="submit"> Add Music </button>			
 			</form>
			<div>
			 <input className="musicInput" placeholder="Trying My own Version" type="text" />
			 <button className="submit" onClick={addMusic}"> Add button </button>		
			</div>
		  </div>
		 </div>
		);
	}
}

export default TodoList;