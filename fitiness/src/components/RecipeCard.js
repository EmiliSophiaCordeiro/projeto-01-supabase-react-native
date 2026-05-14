import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function RecipeCard({ recipe }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {recipe.nome}
      </Text>

      <Text>
        Calorias: {recipe.calorias}
      </Text>

      <Text>
        Tempo: {recipe.tempo_preparo}
      </Text>

      <Text>
        Dificuldade: {recipe.dificuldade}
      </Text>

      <Text>
        Ingredientes: {recipe.ingredientes}
      </Text>

      <Text>
        {recipe.publico ? 'Público' : 'Privado'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
});