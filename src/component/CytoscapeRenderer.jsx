import React from "react"
import cytoscape from "cytoscape"
import {DEF_VISUAL_STYLE} from "./VisualStyle"

// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';

// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset';

// Layout to be used when there is no layout information
const DEF_NO_LAYOUT = 'cose';



/**
 * Simple Network Viewer Component
 */
class CytoscapeRenderer extends React.Component {

  updateCyjs() {
    console.log('* Cytoscape.js is rendering new network...');
    console.log(this.props)

    let visualStyle = DEF_VISUAL_STYLE
    let layout = DEF_LAYOUT

    if(visualStyle === undefined || visualStyle === null) {
      visualStyle = DEF_VISUAL_STYLE
      layout = DEF_NO_LAYOUT
    }

    this.cy = cytoscape({

      container: document.getElementById(CYTOSCAPE_TAG),
      elements: this.props.networkData.elements,
      style: visualStyle,
      layout: {
        name: layout
      }

    });
  }

  componentDidMount() {
    console.log("CyJS DID_UPDATE# called################...")
    this.updateCyjs();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.networkData === this.props.networkData) {
      console.log("@No need to update view...");
      return false;
    }

    console.log("CyJS UPDATE called################...")
    return true;
  }

  render() {
    console.log("CyJS renderer called@@@@@@@@@@@...")
    return (
      <div class="network-widget" style={{ height: '100%', width: '100%'}}>
        <div id={CYTOSCAPE_TAG} style={{ height: '100%', width: '100%'}}></div>
      </div>
    )
  }
}

export default CytoscapeRenderer
