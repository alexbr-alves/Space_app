import { WebView } from 'react-native-webview';




export default function Marte3D() {
  return (
    <WebView
      scrollEnabled={false}
      source={{ uri: 'https://3dwarehouse.sketchup.com/ar-view/6291db8b97e3cfaaa4ee0fb6a51564c3' }}
    />
  );
}