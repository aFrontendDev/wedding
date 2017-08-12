import React from 'react';
import PropTypes from 'prop-types';

// header and footer to be included on every page
import Header from '../02_components/header/header.jsx';
import Footer from '../02_components/footer/footer.jsx';
import Grid from '../02_components/grid.jsx';

// add components here

// add json page files here
import HeaderData from '../01_data/_header.json';
import FooterData from '../01_data/_footer.json';

class LayoutA extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pageClass = this.props.pageClass ? this.props.pageClass : '';
    const dataArray = [];
    const dataFile = this.props.jsonObject;
    let currentData = null;
    const visibleGrid = this.props.visibleGrid;

    dataArray.map((dataObject) => {
      if (dataObject[dataFile]) {
        currentData = dataObject[dataFile];
      }
    });

    return (
      <div>
        <Header data={HeaderData.header_a}/>
        <div id="page" className={pageClass}>
          <main className="main" role="main">

             {
               currentData ?
                currentData.map((component, index) => {

                  switch(component.component) {
                  }
                })
                : null
            }

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

LayoutA.propTypes = {
  pageClass: PropTypes.string,
  jsonFile: PropTypes.string
};

export default LayoutA;