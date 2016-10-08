import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import CyNetworkViewer from 'cy-network-viewer'

const network = {
  data: {
    name: 'empty1'
  },
  elements: {
    nodes: [{data:{id: 'node1'}}],
    edges: []
  }
}



ReactDOM.render(
  <CyNetworkViewer
    id='Rend1'
    renderer='cytoscape'
    network={network}
  />,

  document.getElementById('viewer')
);

