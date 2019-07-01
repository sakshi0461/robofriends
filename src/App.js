import React, {Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1 className='white' >Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange }/>
                <Scroll>
                   <CardList robots={filterrobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;