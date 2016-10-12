// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset'
const LAYOUT = 'cose'

// Default background color
const DEF_BG_COLOR = '#FFFFFF'


const CY_EVENTS = {
  select: "select",
  unselect: 'unselect',
  add: 'add',
  remove: 'remove'
}

const BASE_STYLE = {
  height: '40%',
  width: '100%',
  position: 'relative',
  left: '0',
  top: '0',
  zIndex: '1',
  backgroundColor: '#C9D3DF'
}

// Events handled by this renderer
const SUPPORTED_EVENTS = 'data select unselect add remove'

export { SUPPORTED_EVENTS, BASE_STYLE, CY_EVENTS, DEF_BG_COLOR, DEF_LAYOUT}
