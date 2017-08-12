import React from 'react';
import PropTypes from 'prop-types';

// header and footer to be included on every page
import Header from '../02_components/header/header.jsx';
import Footer from '../02_components/footer/footer.jsx';
import Grid from '../02_components/grid.jsx';

// add components here
import Styleguide from '../02_components/styleguide/styleguide.jsx';

// data
import HeaderData from '../01_data/_header.json';
import FooterData from '../01_data/_footer.json';

class StyleguidePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pageClass = this.props.pageClass ? this.props.pageClass : '';
    const visibleGrid = this.props.visibleGrid;

    return (
      <div>
        <Header data={HeaderData.header_a}/>
        <div id="page" className={pageClass}>
          <main className="main" role="main">
            <div className="layout layout--a">

              <Styleguide />

            </div>

            {
              visibleGrid ?
              <Grid />
              : null
            }
          </main>
        </div>
        <Footer data={FooterData.footer_a}/>
      </div>
    )
  }
}

export default StyleguidePage;