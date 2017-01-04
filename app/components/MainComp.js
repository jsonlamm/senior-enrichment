import React, {Component} from 'react';

import { Link } from 'react-router';


const onAppEnter = function () {

  Promise.all([
    axios.get('/api/albums'),
    axios.get('/api/artists'),
    axios.get('/api/playlists')
  ])
    .then(responses => responses.map(r => r.data))
    .then(([albums, artists, playlists]) => {
      store.dispatch(receiveAlbums(albums));
      store.dispatch(receiveArtists(artists));
      store.dispatch(receivePlaylists(playlists));
    });

};





// comments below will mess up
class Main extends Component {
  // same as: const Main = React.createClass({})
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Live from MainComp!</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

export default Main;
