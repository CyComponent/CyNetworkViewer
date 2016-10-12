import React, {Component, PropTypes} from 'react'
import CytoscapeJsRenderer from './CytoscapeJsRenderer'


const REDERER_CY = 'cytoscape'


class CyNetworkViewer extends Component {

  render() {

    const props = this.props;

    if(this.props.renderer === REDERER_CY) {
      return (
        <CytoscapeJsRenderer {...props} />
      )
    } else {
      return (
        <h1>Renderer not available</h1>
      )
    }
  }
}


CyNetworkViewer.propTypes = {
  id: PropTypes.string,
  networkId: PropTypes.string,
  network: PropTypes.object,
  renderer: PropTypes.string,
};


CyNetworkViewer.defaultProps = {
  renderer: REDERER_CY
};

export default CyNetworkViewer