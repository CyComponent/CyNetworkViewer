import React from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'

export default class CyNetworkViewer extends React.Component {

  static defaultProps = {
    style: {
      height: '100%',
      width: '100%'
    },
    networkUrl: ''
  };

  componentWillMount() {
    console.log("Starting network download...")
    this.props.downloadActions.downloadBegin()
    this.props.downloadActions.download(this.props.networkUrl)
  }

  render() {
      var renderer;

      console.log(this.props.networks);


      if (!this.props.networkDownload.get('downloading')) {
        console.log("Downloading finished! network--")
        let network = this.props.networks.get(this.props.networkUrl)
        network = network.toJS()
        console.log(network)
        console.log(this.props)
        renderer = <CytoscapeRenderer networkData={network}/>
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
