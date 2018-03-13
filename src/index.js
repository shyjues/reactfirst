import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const youtubeApiKey = 'AIzaSyClUbKvBRUb-7a4SlG_URxbiSdLIgTMhHI';

const App = ()=>{

    return <div><SearchBar  /></div>;
}

ReactDOM.render(<App />, document.querySelector('.container') );
