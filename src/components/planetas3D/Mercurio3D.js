import { WebView } from 'react-native-webview';




export default function Venus3d() {
  
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/9cf6ac4add4d4b9aa4ee0fb6a51564c3' }}
    />
  );
}