import React,{Component} from 'react';


class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: 'test'};

        console.log('constructor testing');
    }

    render(){
        return <input onChange={event=>{console.log(event.target.value)}} />;
    }
    
}

export default SearchBar;