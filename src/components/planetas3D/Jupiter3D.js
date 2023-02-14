import { WebView } from 'react-native-webview';




export default function Jupiter3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/c7224a7b39356db8a4ee0fb6a51564c3' }}
    />
  );
}