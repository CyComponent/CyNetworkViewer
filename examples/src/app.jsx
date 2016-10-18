import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Immutable, {Map} from 'immutable'

import {createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk'
import {Provider, connect} from 'react-redux'
import CyNetworkViewer from 'cy-network-viewer'
import {networkActions, networksActions, reducers} from 'cy-network-store'

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

const networkMap = Map({
  network1: networkData
});

const initialState = {

  network: Map({
    networkId: NETWORK_NAME
  }),
  networks: networkMap
}

const store = createStoreWithMiddleware(combined, initialState)


// Render it.
ReactDOM.render(
  <Provider store={store}>
    <CyNetworkViewer
    />
  </Provider>,
  document.getElementById('viewer')
);
