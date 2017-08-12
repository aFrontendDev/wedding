import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
        <div className="skip-navs visually-hidden">
          <a href="#main" tabIndex="0">skip to main content</a>
          <a href="#site-footer" tabIndex="0">skip to site footer</a>
        </div>
        <div className="header__inner">
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  data: PropTypes.object.isRequired
}

export default Header;