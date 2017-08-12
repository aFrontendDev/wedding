import React from 'react';
import PropTypes from 'prop-types';

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        
        <div className="layout layout--a">
          <div className="region region--a">
            <div className="region-inner">

                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>

                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>
                  <div className="block block--single"></div>

                  <div className="block block--single"></div>
                  <div className="block block--single"></div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Grid;