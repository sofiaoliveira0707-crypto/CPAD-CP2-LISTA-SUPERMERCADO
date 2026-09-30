import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { Image } from 'react-native';
 
export default function App() {
const [texto, setTexto] = useState('');
const [lista, setLista] = useState([]);
 
function adicionarItem() {
  setLista([...lista, texto]);
  setTexto('');
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seja bem vindo ao supermercado Paulista</Text>
        <Image source={require('./assets/feiratatuape.jpg')}
        style={styles.image}/>
        <TextInput
      placeholder="digite aqui seu item"
      style={styles.input}
      value={texto}
      onChangeText={setTexto}
      ></TextInput>
      <Button title="adicionar item ao carrinho" onPress={adicionarItem}> </Button>

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
    backgroundColor: '#ddc3c3',
    alignItems: 'center'},
    titulo: {
      fontSize: 24,
      marginTop: 25
    },
    input:{
      marginTop: 10,
      width: '100%',
      borderWidth: 1,
      borderColor: '#000',
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    image: {
    width: 200,
    height: 100,

},
});
 