import React from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{

   state = {
       videos: [],
       selectedVideo: null
};

componentDidMount(){
    this.onTermSubmit("movie");
}

// callback function that retrieves search data from api and updates state
onTermSubmit= async term=>{
    

   const response = await youtube.get('/search',{
        params:{
            q: term
        }
    });

    // update state with api response, 
    // everytime new term is searched video list & selected video updated(random)
    this.setState({
        videos : response.data.items,
        selectedVideo: response.data.items[Math.floor(Math.random()*5)]});

};


onVideoSelect= (video)=>{
this.setState({selectedVideo: video});

}

render(){
    return (
        <div className="ui container" style={{marginTop: "30px"}}>
            <SearchBar onFormSubmit={this.onTermSubmit}/>

            <div className="ui grid">

                <div className="ui row">
                    {/* 11/16 available columns */}
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>


                    {/* 5/16 available columns */}
                    <div className= "five wide column">
                    <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect = {this.onVideoSelect}/>
                    </div>
                
                </div>

            </div>
        </div>
        );
}




}

export default App;