import React from 'react';
import PropTypes from 'prop-types';


class Footer extends React.Component {
  render() {
    const jsonData = this.props.data;

    return (
      <footer id="site-footer" className="footer" role="footer">
        <div className="footer__inner">
          <div className="layout layout--a">
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  data: PropTypes.object.isRequired
}

export default Footer;