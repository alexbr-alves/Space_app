import { WebView } from 'react-native-webview';




export default function Terra3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/7a5eddd9dab2213fa4ee0fb6a51564c3' }}
    />
  );
}