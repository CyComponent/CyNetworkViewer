import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


// React component
import CyNetworkViewerComponent from 'cy-network-viewer-component'

// Redux data store and actions for network data
import {networksActions, reducers} from 'cy-network-store'


/**
 * Container to connect React component to Redux
 */
class CyNetworkViewer extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log('========== Viewer called2')
    console.log(this.props)

    const id = this.props.networkId.get('networkId')

    // CX is an array.
    const networkObj = this.props.networks.get(id)

    return (
      <CyNetworkViewerComponent
        {...this.props}
        networkId={id}
        network={networkObj}
      />
    )
  }
}


const mapStateToProps = state => ({
  networks: state.networks,
  networkId: state.network,
  renderer: state.renderer
});

const mapDispatchToProps = dispatch => ({
  eventHandlers: bindActionCreators(networksActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CyNetworkViewer);
