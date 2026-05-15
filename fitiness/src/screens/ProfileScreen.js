import { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { supabase } from '../services/supabase';

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setEmail(user.email);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();

    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Perfil
      </Text>

      <Text style={styles.email}>
        {email}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  width: '100%',
  alignSelf: 'center',
  backgroundColor: '#F4FFF4',
},

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },

  email: {
    fontSize: 18,
    marginBottom: 30,
  },

  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    width: 150,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});