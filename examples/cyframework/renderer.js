const cf = CyFramework.config([CyNetworkStore]);

const networkData = require('./sample-cx.json');

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
    networkId: 'network1'
  })
});

cf.render(CyNetworkViewer, document.getElementById('main'), buildInitialState());