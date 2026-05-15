import { useEffect, useState } from 'react';

import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

import { supabase } from '../services/supabase';

import RecipeCard from '../components/RecipeCard';

export default function HomeScreen() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from('receitas_fit')
      .select('*')
      .eq('user_id', user.id)
      .order('id', { ascending: false });

    console.log(data);
    console.log(error);

    if (data) {
      setRecipes(data);
    }
  }

  return (
    <View style={styles.container}>
      {recipes.length === 0 ? (
        <Text style={styles.empty}>
          Nenhuma receita cadastrada
        </Text>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) =>
            item.id.toString()
          }
          renderItem={({ item }) => (
            <RecipeCard recipe={item} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#F4FFF4',
  },

  empty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 18,
    color: '#555',
  },
});