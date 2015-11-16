import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    //when initialize state is set to FooterStore's state
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  // when component is loaded sets state to whatever is in Footerstore and initialize a store listener
  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }
  // when component is unloaded (navigated to diff page) the store listener is removed. When FooterStore unlistens, same as Footer
  componentWillUnMount() {
    FooterStore.unlisten(this.onChange);
  }
  // when store is updated, this function is called, and updated Footer's state.
  onChange(state) {
    this.setState(state);
  }

  render() {
    let leaderboardCharacters = this.state.characters.map((character) => {
      return (
        <li key={character.characterId}>
          <Link to={'/characters/' + character.characterId}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
            </Link>
        </li>
      )
    });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering. </p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
              <ul className='list-inline'>
                {leaderboardCharacters}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

// var React = require('react');
// var Link = require('react-router').Link;
// var FooterStore = require('../stores/FooterStore');
// var FooterActions = require('../actions/FooterActions');

// var Footer = React.createClass({
//   getInitialState: function() {
//     return FooterStore.getState();
//   }

//   componentDidMount: function() {
//     FooterStore.listen(this.onChange);
//     FooterActions.getTopCharacters();
//   }

//   componentWillUnmount: function() {
//     FooterStore.unlisten(this.onChange);
//   }

//   onChange: function(state) {
//     this.setState(state);
//   }

//   render() {
//     var leaderboardCharacters = this.state.characters.map(function(character) {
//       return (
//         <li key={character.characterId}>
//           <Link to={'/characters/' + character.characterId}>
//             <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
//           </Link>
//         </li>
//       );
//     });

//     return (
//       <footer>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-sm-5'>
//               <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
//               <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
//               <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
//               <p>© 2015 Sahat Yalkabov.</p>
//             </div>
//             <div className='col-sm-7 hidden-xs'>
//               <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
//               <ul className='list-inline'>
//                 {leaderboardCharacters}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// });

// module.exports = Footer;