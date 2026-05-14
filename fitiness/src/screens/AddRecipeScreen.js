import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from 'react-native';

import { supabase } from '../services/supabase';

export default function AddRecipeScreen() {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [calorias, setCalorias] = useState('');
  const [tempo, setTempo] = useState('');
  const [dificuldade, setDificuldade] = useState('');
  const [publico, setPublico] = useState(false);

  async function handleAddRecipe() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from('receitas_fit')
      .insert({
        nome,
        ingredientes,
        calorias,
        tempo_preparo: tempo,
        dificuldade,
        publico,
        user_id: user.id,
      });

    if (error) {
      Alert.alert('Erro', error.message);
      return;
    }

    Alert.alert('Receita cadastrada');

    setNome('');
    setIngredientes('');
    setCalorias('');
    setTempo('');
    setDificuldade('');
    setPublico(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nova Receita
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Ingredientes"
        style={styles.input}
        value={ingredientes}
        onChangeText={setIngredientes}
      />

      <TextInput
        placeholder="Calorias"
        style={styles.input}
        value={calorias}
        onChangeText={setCalorias}
      />

      <TextInput
        placeholder="Tempo de preparo"
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
      />

      <TextInput
        placeholder="Dificuldade"
        style={styles.input}
        value={dificuldade}
        onChangeText={setDificuldade}
      />

      <View style={styles.switchContainer}>
        <Text>Público</Text>

        <Switch
          value={publico}
          onValueChange={setPublico}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddRecipe}
      >
        <Text style={styles.buttonText}>
          Salvar Receita
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4FFF4',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});