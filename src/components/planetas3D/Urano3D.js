import { WebView } from 'react-native-webview';




export default function Urano3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/397684d175d8ca6fa4ee0fb6a51564c3' }}
    />
  );
}