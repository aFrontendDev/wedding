import React from 'react';
import PropTypes from 'prop-types';

class Blockquote extends React.Component {
  render() {
    return (
        <section className="block block--size-a">
          <h2 className="visually-hidden">Blockquote</h2>
          <blockquote className="quote">
            <div className="quote__detail">
              <p>Yet when the results were analysed the scans revealed a surprise. Instead of wax, the restriction was mainly being caused by something with a higher density: scale. Flushing the pipe with that original mix of chemicals would have made no difference at all.</p>
            </div>
            {/*<footer className="quote__caption"><cite>&mdash; Person Name, Company Name</cite></footer>*/}
          </blockquote>
        </section>

    )
  }
}

export default Blockquote;