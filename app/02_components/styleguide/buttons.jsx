import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  render() {
    return (

      <div>
        <section className="block block--size-a">
          <header>
            <h2 className="header--stylesheet">Default buttons <small>(.btn)</small></h2>
          </header>
          <div className="form-actions">
            <button type="submit" className="btn btn--style-a">.btn--style-a</button>
            {/* <button type="submit" className="btn btn--style-a btn--icon-right" >.btn--style-a</button> */}
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn--style-b">.btn--style-b</button>
            {/* <button type="submit" className="btn btn--style-b btn--icon-right" >.btn--style-b</button> */}
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn--style-c">.btn--style-c</button>
            {/* <button type="submit" className="btn btn--style-c btn--icon-right" >.btn--style-c</button> */}
          </div>
          <div className="form-actions form-actions--a">
            <button type="submit" className="btn btn--style-d">.btn--style-d</button>
            {/* <button type="submit" className="btn btn--style-d btn--icon-right">.btn--style-d</button> */}
          </div>
          <div className="form-actions form-actions--a">
            <button type="submit" className="btn btn--style-e">.btn--style-e</button>
            {/* <button type="submit" className="btn btn--style-e btn--icon-right" >.btn--style-e</button> */}
          </div>
        </section>
      </div>

    )
  }
}

export default Buttons;