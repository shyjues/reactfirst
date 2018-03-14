import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const youtubeApiKey = 'AIzaSyClUbKvBRUb-7a4SlG_URxbiSdLIgTMhHI';


class App extends Component{

    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: youtubeApiKey, term:'kerala'},(videos)=>{
            this.setState({videos});
        });
    }

    render(){
        return <div>
            <SearchBar  />
            <VideoList videos={this.state.videos} />
          </div>;

    }

}



ReactDOM.render(<App />, document.querySelector('.container') );
