import { WebView } from 'react-native-webview';




export default function Saturno3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/bf067e0a9c49603da4ee0fb6a51564c3' }}
    />
  );
}