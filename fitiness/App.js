import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  StyleSheet,
} from 'react-native';

import AuthStack from './src/navigation/AuthStack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF7EA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    width: '100%',
    maxWidth: 450,
    backgroundColor: '#F4FFF4',
    borderRadius: 20,
    overflow: 'hidden',
  },
});