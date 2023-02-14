import { WebView } from 'react-native-webview';




export default function Netuno3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/6d9b528bde22af1aa4ee0fb6a51564c3' }}
    />
  );
}