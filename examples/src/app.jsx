/**
 * Network Viewer Example 1:
 *
 * Standard React + Redux implementation
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Immutable, {Map, Set} from 'immutable'

import {createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import CyNetworkViewer from 'cy-network-viewer'
import {reducers} from 'cy-network-store'

const networkData = require('./sample-cx.json');


// 1. Create store from reducers
const create = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(create)


const network = reducers.network
const networks = reducers.networks
const combined = combineReducers({network, networks})

const NETWORK_NAME = 'network1'

const baseStyle = {
  width: '100%',
  height: '100%',
  background: '#DDDDDE'
}


// TODO: create a better utility function (factory) for this object
const buildInitialState = () => ({
  networks: Immutable.fromJS({
    network1: {
      network: networkData,
      selected: {
        nodes: Set(),
        edges: Set()
      },
      view: {
        zoom: 1.0,
        pan: {
          x: 0,
          y: 0
        },
        style: {}
      }
    }
  }),
  network: Map({
    networkId: NETWORK_NAME
  })
});


const store = createStoreWithMiddleware(combined, buildInitialState())


// Render it.
ReactDOM.render(
  <Provider store={store}>
    <CyNetworkViewer style={baseStyle}/>
  </Provider>,
  document.getElementById('viewer')
);
