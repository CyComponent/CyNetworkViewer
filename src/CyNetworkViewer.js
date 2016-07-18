import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CyNetworkViewer from './component/CyNetworkViewer'

import * as networkActions from './store/networks.js'
import * as networkDownloadActions from './store/networkDownload.js'

require("./style/component.scss")

function mapStateToProps(state) {
  return {
    networks: state.cy_network.networks,
    networkDownload: state.cy_network.networkDownload
  }
}

function mapDispatchToProps(dispatch) {
  return {
    downloadActions: bindActionCreators(networkDownloadActions, dispatch),
    networkActions: bindActionCreators(networkActions, dispatch)
  }
}

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(CyNetworkViewer)

const storeName = 'cy_network_viewer'
const store = {}

export {
  component,
  storeName,
  store
}
