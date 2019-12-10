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
		 strr: [],
		 users: []
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
asyncFunc() {
  // fetch data from a url endpoint
	 const url = 'http://localhost/contact.php'

  axios.get(url).then(response => response.data)
    .then((data) => {
		console.log(data);
    //  this.setState({ items: data })
    //  console.log(this.state.items)
		let property = JSON.parse(JSON.stringify(data));
  		console.log(property[1].name);
	      		var property2 = property[1].name;
        const users = JSON.parse(JSON.stringify(data));
		console.log('testing');
  		console.log(users);
          		console.log(users[2].name); 
		                this.setState({ users });
  })
}
 propertytext = e => {

 const url = 'http://localhost/contact.php'
    axios.get(url).then(response => response.data)
      .then((data) => {
    //  this.setState({ items: data })
    //  console.log(this.state.items)
		let  property = JSON.parse(JSON.stringify(data));
       //     property2 = (property[0].name);
		var property2 = property[0].name;
		//     strr.push('sadasdas');
		 //  alert(this.strr);
	     }) 
	// alert(this.strr);
	 //	 return this.strr

 }
   componentDidMount() {
  
 const url = 'http://localhost/contact.php'
    axios.get(url).then(response => response.data)
    .then((data) => {
		console.log(data);
    //  this.setState({ items: data })
    //  console.log(this.state.items)
		let property = JSON.parse(JSON.stringify(data));
  		console.log(property[1].name);
	      		var property2 = property[1].name;
        const users = JSON.parse(JSON.stringify(data));
		console.log('testing');
  		console.log(users);
          		console.log(users[2].name); 
		                this.setState({ users });


     })
  
  
       
  /*	 fetch("http://localhost/contact.php")
      .then(res => res.text())
      .then(
        (result) => {
            console.log(result);

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {

        console.error(error);


        }
      ) */
  }
	
	render() {

		return (
			
			<div>
			 <h1>Creating Property</h1>
		     <TodoList addItem={this.addItem} inputElement={this.inputElement} handleInput={this.handleInput} currentItem={this.state.currentItem} name={this.state.name} changetext={this.changetext}/>
			 <TodoItem entries={this.state.items} deleteItem={this.deleteItem} />
	
              {
                        this.state.users.map(
                            user => <li>{user.name}</li>
                        )
                    }
 
		    </div>
		);
	}
}

export default Admin