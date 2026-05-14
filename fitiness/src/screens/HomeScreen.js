import { useEffect, useState } from 'react';

import {
  View,
  FlatList,
  StyleSheet,
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

    const { data } = await supabase
      .from('receitas_fit')
      .select('*')
      .or(`publico.eq.true,user_id.eq.${user.id}`)
      .order('id', { ascending: false });

    setRecipes(data || []);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RecipeCard recipe={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F4FFF4',
  },
});
