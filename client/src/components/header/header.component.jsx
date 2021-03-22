import React from 'react';
import { Link } from 'react-router-dom';
// connect lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

// this state passed in as an argument is the root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// in the first argument of connect, you pass the function that allows us to access the state
export default connect(mapStateToProps)(Header);
