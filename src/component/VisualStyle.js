export const DEF_VISUAL_STYLE = [
  {
    selector: 'node',
    style: {
      'background-color': '#436EEE',
      'background-opacity': 0.9,
      'width': '40px',
      'height': '40px',
      'label': 'data(name)',
      'font-family': 'Roboto, sans-serif'
    }
  },
  {
    selector: 'edge',
    style: {
      'line-color': '#aaaaaa',
      'width': 1,
      'label': 'data(interaction)',
      'font-size': '0.15em',
      'font-family': 'Roboto, sans-serif',
      'text-opacity': 0.5
    }
  },
  {
    selector: 'node:selected',
    style: {
      'background-color': 'yellow'
    }
  },
  {
    selector: 'edge:selected',
    style: {
      'line-color': 'yellow',
      'width': 6
    }
  }
];
