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

  render() {
    console.log('========== Viewer called')
    console.log(this.props)

    const id = this.props.networkId.get('networkId')
    const net = this.props.networks.get(id)

    return (
      <CyNetworkViewerComponent
        {...this.props}
        networkId={id}
        network={{net}}
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
