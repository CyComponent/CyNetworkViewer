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
  height: '100%',
  width: '100%'
}

// Events handled by this renderer
const SUPPORTED_EVENTS = 'data select unselect add remove'

export { SUPPORTED_EVENTS, BASE_STYLE, CY_EVENTS, DEF_BG_COLOR, DEF_LAYOUT}
