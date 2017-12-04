import { Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width;

/**
 * Compute style based on props
 * @param size The media size
 * @param hasRadius Does the media rounded or not ?
 * @param color The media color
 */
export default ({ size = 40, hasRadius = false, color = '#efefef', full = false }) => ({
  height: full ? WIDTH * 0.95 : size,
  width: full ? '100%' : size,
  borderRadius: hasRadius ? size / 2 : 3,
  backgroundColor: color,
});
