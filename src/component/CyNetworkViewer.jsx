import React from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'

export default class CyNetworkViewer extends React.Component {

  static defaultProps = {
    style: {
      height: '100%',
      width: '100%'
    },
    networkUrl: '',
    renderOptions: {}
  };

  componentWillMount() {
    this.props.downloadActions.downloadBegin()
    this.props.downloadActions.download(this.props.networkUrl)
  }

  render() {
    var renderer;
    if (!this.props.networkDownload.get('downloading')) {
      const network = this.props.networks.get(this.props.networkUrl)
      renderer = <CytoscapeRenderer
        networkData={network}
        renderOptions={this.props.renderOptions}
      />
    } else {
      console.log("Network is downloading...")
      renderer = <div/>
    }
    return (
      <div style={this.props.style}>
        {renderer}
      </div>
    )
  }

}
