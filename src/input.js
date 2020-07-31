import React,{Component} from 'react'
import Axios from 'axios';
import {Item} from "./item";
import './input.css';
import {DebounceInput} from 'react-debounce-input';
class Input extends Component {
constructor(props){
    super(props)
    this.timer=null
}
    state = {
        name:'',
        suggest:'',
        
    }
    
    
changeHandler = (event) =>{
    this.setState({name: event.target.value});
    if(this.state.name.length>2){
      this.timer=setTimeout(()=>{ Axios.get(`https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6S lU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${this.state.name}&startIndex=0&maxResults=10`).then(response =>{    
            this.setState({suggest:response.data})
            }) }, ((Math.random() * 5) + 1));
            console.log(this.state.name)
            console.log(this.state.suggest)
        
        
    } else{
        this.setState({suggest:''})
    }
}

    render() {
 
        return <div >
            {/* <input type="text" autoComplete="off" value={this.state.name} name="name" onChange={this.changeHandler}></input>
          {this.state.suggest.totalItems>0 && <ul> {this.state.suggest.items.map(key=><li key={key.id}><Item item={key} name={this.state.name}/></li>)}</ul>
    } */}
    <DebounceInput
          minLength={0}
          debounceTimeout={2000}
          onChange={this.changeHandler} />
          {this.state.suggest.totalItems>0 && <ul> {this.state.suggest.items.map(key=><li key={key.id}><Item item={key} name={this.state.name}/></li>)}</ul>
    } 
 
    
</div>
    

}
}
export { Input }