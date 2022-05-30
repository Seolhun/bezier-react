/* Internal dependencies */
import type { AxisAlignment } from 'Components/Stack/types'

const MAPPED_FLEX_PROPERTIES: Record<AxisAlignment, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

export const flex = (alignment: AxisAlignment): string => MAPPED_FLEX_PROPERTIES[alignment]