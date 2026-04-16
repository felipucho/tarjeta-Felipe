import { StyleSheet, View } from 'react-native';
import Presentacion from './presentacion';

export default function App() {
  return (
    <View style={styles.container}>
      <Presentacion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});