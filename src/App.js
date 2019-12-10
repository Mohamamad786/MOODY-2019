import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function addMusic() {
	 alert('working');
 }
class App extends Component {
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
		 console.log(newItem)
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
 addMusic() {
	 alert('working');
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
	render() {
		return (
			<div className="App">
			 <Header />
			 <Main />
			<Footer />
			</div>
		);
	}
}

export default App;