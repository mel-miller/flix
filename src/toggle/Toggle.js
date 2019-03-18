import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';
import { getMovies } from '../movies/actions';

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility
      && <p>You will be seeing this if redux action is toggled</p>
    }
    <button type="button" onClick={toggleMessage}>
      Toggle Me
    </button>
    <button type="button" onClick={getMovies}>
      Load Movies
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage,
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
