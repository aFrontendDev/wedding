import React from 'react';
import PropTypes from 'prop-types';

class Icons extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Icons <small>(.icon)</small></h2>
        </header>
        <div className="icons">
          <ul className="list--unstyled">
            <li>
              <i className="icon icon--arrow-dots-right" aria-hidden="true"></i> .icon .icon--arrow-dots-right
            </li>
            <li>
              <i className="icon icon--x-v2" aria-hidden="true"></i> .icon .icon--x-v2
            </li>
            <li>
              <i className="icon icon--home" aria-hidden="true"></i> .icon .icon--home
            </li>
            <li>
              <i className="icon icon--chevron-right" aria-hidden="true"></i> .icon .icon--chevron-right
            </li>
            <li>
              <i className="icon icon--chevron-left" aria-hidden="true"></i> .icon .icon--chevron-left
            </li>
            <li>
              <i className="icon icon--placeholder" aria-hidden="true"></i> .icon .icon--placeholder
            </li>
            <li>
              <i className="icon icon--arrow-left" aria-hidden="true"></i> .icon .icon--arrow-left
            </li>
            <li>
              <i className="icon icon--arrow-right" aria-hidden="true"></i> .icon .icon--arrow-right
            </li>
            <li>
              <i className="icon icon--arrow-up" aria-hidden="true"></i> .icon .icon--arrow-up
            </li>
            <li>
              <i className="icon icon--arrow-down" aria-hidden="true"></i> .icon .icon--arrow-down
            </li>
            <li>
              <i className="icon icon--chevron-up" aria-hidden="true"></i> .icon .icon--chevron-up
            </li>
            <li>
              <i className="icon icon--chevron-down" aria-hidden="true"></i> .icon .icon--chevron-down
            </li>
            <li>
              <i className="icon icon--x" aria-hidden="true"></i> .icon .icon--x
            </li>
            <li>
              <i className="icon icon--menu" aria-hidden="true"></i> .icon .icon--menu
            </li>
            <li>
              <i className="icon icon--menu-thin" aria-hidden="true"></i> .icon .icon--menu-thin
            </li>
            <li>
              <i className="icon icon--check" aria-hidden="true"></i> .icon .icon--check
            </li>
          </ul>
        </div>
    </section>
    )
  }
}

export default Icons;