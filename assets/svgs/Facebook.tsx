import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const FacebookSvg = ({ ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M13.645 22.995V12.962h3.473l.52-3.91h-3.993V6.555c0-1.132.325-1.903 1.998-1.903l2.135-.001V1.154c-.37-.048-1.636-.154-3.11-.154-3.078 0-5.185 1.822-5.185 5.168v2.884H6v3.91h3.481v10.033h4.163Z"
      fill={props.fill}
    />
  </Svg>
)

export default FacebookSvg
