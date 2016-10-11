import React, {Component} from 'react'
import cytoscape from 'cytoscape'
import * as config from './CytoscapeJsConfig'


class CytoscapeJsRenderer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rendered: false,
      vs: 'default',
    }
  }


  updateCyjs(networkData) {
    if(networkData === undefined || networkData === null) {
      return;
    }

    console.log("*** Redering start")

    this.state.rendered = true
    let network = networkData

    // Case 1: network has Style section
    let visualStyle = network.style
    let layoutFlag = false

    if (visualStyle === undefined || visualStyle === null || visualStyle === {}) {

      if(visualStyle === null) {
        layoutFlag = true
      }
    } else {
    }

    const cy = this.state.cyjs
    cy.add(network.elements.nodes)
    cy.add(network.elements.edges)
    if(layoutFlag) {
      cy.layout({ name: LAYOUT })
    }
    cy.fit()
  }

  componentDidMount() {
    // Create Cytoscape.js instance here, only once!
    const cy = cytoscape(
      Object.assign(
        {
          container: document.getElementById(this.props.id),
          elements: [],
          layout: {
            name: config.DEF_LAYOUT
          }
        }))
    this.setEventListener(cy)
    this.state.cyjs = cy
    this.updateCyjs(this.props.network)
    console.log("*** CyJS initialized!")
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   // React is responsible only for the root Cytoscape tag.
  //   // and in this section, the only thing we need to check is background and network.
  //   console.log("$$$$$$$$$ Checking props")
  //   if(!this.state.rendered) {
  //     console.log("$$$$$$$$$ NEED rendering")
  //     this.updateCyjs(this.props.network)
  //     return true
  //   }
  //
  //   if (nextProps.network === this.props.network) {
  //     // Is this background update?
  //     if(nextProps.backgroundColor === this.props.backgroundColor) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   }
  //   return true
  // }

  componentWillReceiveProps(nextProps) {
    // const command = nextProps.commands.command
    // if(command !== '') {
    //   const cy = this.state.cyjs
    //   if(command === 'fit') {
    //     cy.fit()
    //   }
    //   else if(command === 'zoomIn') {
    //     cy.zoom(cy.zoom() * 1.2)
    //   }
    //   else if(command === 'zoomOut') {
    //     cy.zoom(cy.zoom() * 0.8)
    //   }
    //   this.props.commandActions.reset()
    //   return
    // }
    //
    // // Style
    // const curVs = this.state.vs
    // const nextVs = nextProps.currentVs.get('vsName')
    // if(curVs !== nextVs) {
    //   const vs = this.props.styles.get(nextVs)
    //   this.state.cyjs.style(vs)
    //   this.setState({
    //     vs: nextVs
    //   })
    //
    //   return;
    // }


    if (nextProps === undefined || nextProps.network === undefined) {
      console.log("=========== NO DATA");
      return
    }

    if (nextProps.network === this.props.network
      && this.state.rendered === true) {
      return
    }
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(this.state.rendered)
    // if(!this.state.rendered) {
      this.updateCyjs(nextProps.network)
    // }
  }


  setEventListener(cy) {
    cy.on(config.SUPPORTED_EVENTS, event => {

      const eventType = event.originalEvent.type

      switch (event.originalEvent.type) {
        case config.CY_EVENTS.select:
          let selected = event.cyTarget;
          this.props.eventActions.selected(selected.data())
          break
        case config.CY_EVENTS.unselect:
          let unselected = event.cyTarget;
          this.props.eventActions.unselected(unselected.data())
          break
        default:
          break
      }
    })
  }



  render() {
    const id = this.props.id
    if(id === null || id === undefined) {
      throw Error("Renderer ID is required for Cytoscape.js renderer.")
    }

    const bgc = config.DEF_BG_COLOR
    const baseStyle = config.BASE_STYLE
    baseStyle.backgroundColor = bgc

    return (
      <div
        id={id}
        style={baseStyle}
      />
    )
  }
}

export default CytoscapeJsRenderer
