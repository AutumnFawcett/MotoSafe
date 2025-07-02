import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AlertButtons from './components/AlertButtons';

export default function App() {
  return (
    <View className="flex-1 bg-gray-100 items-center justify-center p-6">
      <AlertButtons />
      <StatusBar style="auto" />
    </View>
  );
}
