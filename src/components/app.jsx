import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "mtUQxyq3Ez5OvJtcae"
    };

    this.search("disney");
  }

     search = (query) => {
       giphy('TDV69xcHcA1TAAutquXGSlOFLBW6JuzC').search({
         q: query,
         rating: 'g',
         limit: 10
       }, (error, result) => {
         this.setState({
           gifs: result.data
         });
       });
     }

    selectGif = (id) => {
      this.setState({
        selectedGifId: id
      });
    }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
        <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}


export default App;
