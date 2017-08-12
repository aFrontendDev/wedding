import React from 'react';
import PropTypes from 'prop-types';

class Headings extends React.Component {
  render() {
    return (
      <section className="block block--size-a">
        <header>
          <h2 className="header--stylesheet">Headings</h2>
        </header>

        <div className="visible-mediumscreen">
          <h1>H1.	JM Sans Extended Regular,<br />52px / 68px</h1>
          <h2>H2. JM Sans Extended Regular,<br />32px / 42px</h2>
          <h3>H3. JM Sans Regular,<br />26px / 36px</h3>
          <h4>H4. JM Sans Bold,<br />24px / 22px</h4>
          <h5>H5. JM Sans Regular,<br />24px / 34px</h5>
          <h6>H6. JM Sans Regular,<br />20px / 30px</h6>
        </div>

        <div className="visible-smallscreen hidden-mediumscreen">
          <h1>H1.	JM Sans Extended Regular,<br />30px / 39px</h1>
          <h2>H2. JM Sans Extended Regular,<br />32px / 42px</h2>
          <h3>H3. JM Sans Bold,<br />24px / 22px</h3>
          <h4>H4. JM Sans Extended Regular,<br />20px / 46px</h4>
          <h5>H5. JM Sans Regular,<br />24px / 34px</h5>
        </div>
      </section>

    )
  }
}

export default Headings;