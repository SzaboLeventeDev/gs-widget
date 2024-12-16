export type Widget = {
  id: number
  type: Impact
  amount: number
  action: Action

  /** The widget is activated or not. Only one widget can be active at the same time. */
  active: boolean

  /** The widget is published or not. */
  linked: boolean
  selectedColor: Color
}

export type Color = 'white' | 'black' | 'blue' | 'green' | 'beige'

/** Impact defines the element the widget provides information about. */
export type Impact = 'carbon' | 'plastic bottles' | 'trees' | 'plastic' // TODO: plastic is in the test data, but not in the doc.

/* The action which corresponds to an impact type */
export type Action = 'collects' | 'plants' | 'offsets'

export type State = {
  widgets: Widget[]
}
