import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
export function IconBookmark(props: any) {
  return (
    <Svg width={props.size||24} height={props.size||24} viewBox="0 0 24 24" fill="none" stroke={props.color||"#111"} strokeWidth={props.strokeWidth||1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <Circle cx="12" cy="12" r="8" />
      <Path d="M12 8v4l3 2" />
    </Svg>
  );
}
export default IconBookmark;