import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoItem from './TodoItems';

class App extends Component {
inputElement = React.createRef()
 constructor() {
	 super()
	 this.state = {
		 items: [],
		 currentItem: {text:'', key:''},
	 }
 }
handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
 addItem = e => {
	 e.preventDefault()
	 const newItem = this.state.currentItem
	 if (newItem.text !== '') {
		 console.log(newItem)
     const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
	 }
	 else {
		 alert('Enter The Music Name Please');
	 }
 }
 deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
 addmusic = e => {
	 e.preventDefault();
	 alert('working');
 }
	render() {
		return (
			<div className="App">
			 <h1>Creating Moody Music App</h1>
			{/* importing TodoList Component */}
		     <TodoList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem}/>
			 <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
			</div>
		);
	}
}

export default App;