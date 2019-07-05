import React, { Component } from 'react'

class TodoItems extends Component {
	createTasks = item => {
		 return ( <p>{item.text}< img class="close_btn" src="/img/close_icon.png" key={item.key} onClick={() => this.props.deleteItem(item.key)}/></p> )
	}

	render() {
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createTasks)	
		return (<ul className="theList">{listItems}</ul>)
	}
}

export default TodoItems
