import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button} from 'react-native';
 
 
export default function App() {
const [texto, setTexto] = useState('');
const [lista, setLista] = useState([]);
 
function adicionarItem() {
  setLista([...lista, texto]);
  setTexto('');
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de supermercado</Text>
      <TextInput
      placeholder="digite aqui"
      style={styles.input}
      value={texto}
      onChangeText={setTexto}
      ></TextInput>
      <Button title="adicionar" onPress={adicionarItem}> </Button>
      <FlatList
        data={lista}
        keyExtractor={(item) => item}
        renderItem={({item}) => <Text>{item}</Text>}
      ></FlatList>
    </View>
  );
}
 
const styles =
StyleSheet.create({
  container: {
    flex: 1, padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'},
    titulo: {
      fontSize: 24,
      marginTop: 25
    },
    input:{
      marginTop: 10,
    }
});
 