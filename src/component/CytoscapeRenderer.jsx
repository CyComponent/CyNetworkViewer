import React from "react"
import cytoscape from "cytoscape"
import {DEF_VISUAL_STYLE} from "./VisualStyle"

// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';

// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset';

// Layout to be used when there is no layout information
const DEF_NO_LAYOUT = 'cose';


class CytoscapeRenderer extends React.Component {

  updateCyjs() {
    console.log('* Cytoscape.js is rendering new network...');

    let network = this.props.networkData.toJS()

    let visualStyle = DEF_VISUAL_STYLE
    let layout = DEF_LAYOUT

    if (visualStyle === undefined || visualStyle === null) {
      visualStyle = DEF_VISUAL_STYLE
      layout = DEF_NO_LAYOUT
    }


    this.cy = cytoscape(
      Object.assign(
        this.props.renderOptions,
        {
          container: document.getElementById(CYTOSCAPE_TAG),
          elements: network.elements,
          style: visualStyle,
          layout: {
            name: layout
          }

        }));
  }

  componentDidMount() {
    this.updateCyjs();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.networkData.equals(this.props.networkData)) {
      console.log("Network unchanged, not updating cytoscapejs");
      return false;
    }
    console.log("Network changed, updating cytoscapejs")
    return true;
  }

  render() {
    return (
      <div class="network-widget" style={{height: '100%', width: '100%'}}>
        <div id={CYTOSCAPE_TAG} style={{height: '100%', width: '100%'}}></div>
      </div>
    )
  }
}

export default CytoscapeRenderer
