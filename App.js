import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  
  const add = () =>{
    setData([...data, {key:text}]);
    setText('');
  }

  const clear = () =>{
    let empty = [''];
    setData(...empty);
    setText('');
  }

  return (
    <View style={styles.container}>     
      <TextInput style={styles.textInput}
        onChangeText={text => setText(text)} 
        value={text}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
        <Button color="#065535" onPress={add} title="ADD" />
        <Button color="#065535" onPress={clear} title="CLEAR" />
      </View> 
      <Text style={styles.text}>Shopping List</Text> 
      <FlatList 
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 50, 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
  },
  textInput: {
    height: 40, 
    width: "50%", 
    borderColor: '#808080', 
    borderWidth: 2, 
    margin: 5,
    fontSize: 18,    
  },  
});
