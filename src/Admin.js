// JavaScript Document
import TodoList from './TodoList';
import TodoItem from './TodoItems';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class Admin extends Component {
inputElement = React.createRef()
 constructor() {
	 super()
	 this.state = {
		 items: [],
		 currentItem: {text:'', key:''},
		 name: {text:'Mohammad'},
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
		// console.log(newItem)
	        let formData = new FormData();
        formData.append('name', this.state.currentItem.text)
        formData.append('key', this.state.currentItem.key)
	  axios({
		 method: 'post',
		 url: 'http://localhost/contact.php',
		 data: formData,
		 config: {header: {'Accept': 'application/json','Content-Type': 'multipart/form-data','Access-Control-Allow-Origin': '*' }}
	  })
	  .then(function (response) {
            //handle success
           // console.log(response)
 })
        .catch(function (response) {
            //handle error
          //  console.log(response)
        });
     const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
	 
	 }
	 else {
		 alert('Enter The Property Type Please');
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

changetext = e => {
	const newName = e.target.value
	if (newName != '') { 
	this.setState({
		name: {text:'Mohammad and ' + newName},
	})
	}
   	else {
	this.setState({
		name: {text:'Mohammad'},
	})
	}
}

  componentDidMount() {

    const url = 'http://localhost/contact.php'
    axios.get(url).then(response => response.data)
    .then((data) => {
		alert('data');
		console.log('working');
		console.log(data);
      this.setState({ items: data })
      console.log(this.state.items)
     })  
  }
	
	render() {
		return (
			<div>
			 <h1>Creating Property</h1>
		     <TodoList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem} name={this.state.name} changetext={this.changetext}/>
			 <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
		    </div>
		);
	}
}

export default Admin