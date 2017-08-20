import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_bar';
import VideoList from './components/Video_list';
import VideoDetails from './components/Video_detail';
const Api_Key = 'AIzaSyDQp_U6yR4_h-Z7bUektmb1wLidQuHI75Q';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			videos : [],
			selectedVideo:null
		};


		this.videoSearch('subway');
	}

	videoSearch(term){
		YTSearch({key:Api_Key , term :term}, (videoData) => {
			//console.log(data);
			this.setState({
				videos : videoData,
				selectedVideo : videoData[0]
			});
		});
	}

   render() {
   	const videoSearch =_.debounce((term)=>{this.videoSearch(term)},300)
      return (
         <div className="col-sm-12">
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetails video = {this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
         </div>
      );
   }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));