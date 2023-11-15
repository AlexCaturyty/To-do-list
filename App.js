import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";

import Todo from "./components/Todo";

export default function App() {
  const [Tarefas, setTarefas] = useState([]);
  const [Texto, setTexto] = useState("");

  const NovasTarefas = () => {
    if (Texto == "") return;
    setTarefas([...Tarefas, Texto]);
    setTexto("");
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= {'white'} barStyle="dark-content"/>
      <Text style={styles.tittle}>Minha Lista</Text>
      
      <View style={styles.form}>
        <TextInput
          placeholder="Digite aqui uma nova tarefa"
          style={styles.textinput}
          maxLength={50}
          value={Texto}
          onChangeText={(value)=> setTexto(value)}
        />
        <TouchableOpacity style={styles.addTodo} onPress={() => NovasTarefas()}>
          <Text style={{ color: "white" }}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {Tarefas.map((value, index) => {
          return (<Todo Texto={value} key={index}/>);
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  textinput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginRight: 8,
    borderRadius: 10
  },
  addTodo: {
    backgroundColor: "#435676",
    padding: 8,
    borderRadius: 4,
  },
  tittle:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#435676',
    fontSize: 50,
    textDecorationLine: 'underline'
  },
});
