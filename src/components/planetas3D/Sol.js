import { WebView } from 'react-native-webview';




export default function Sol3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/c4182106b4b389f43bd1755160e9ca82' }}
    />
  );
}