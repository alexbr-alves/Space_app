import { WebView } from 'react-native-webview';




export default function Venus3d() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/21e3ccc4e50cb8a0a4ee0fb6a51564c3' }}
    />
  );
}