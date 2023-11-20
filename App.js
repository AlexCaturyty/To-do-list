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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Todo from "./components/Todo";

// Página Inicial
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= {'white'} barStyle="dark-content"/>
      <Text style={styles.tittle}>Olá, seja bem vindo!</Text>


      <View style={styles.form}>
        <TextInput
          placeholder="Login"
          style={styles.textinput}
          maxLength={50}
          />
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Senha"
          secureTextEntry={true} // Configuração para ocultar o texto
          style={styles.textinput}
          maxLength={50}
          />
      </View>
      <TouchableOpacity
        style={styles.navigateToTasksButton}
        onPress={() => navigation.navigate("Tarefas")}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <Text style={styles.legend}>Aplicativo de tarefas feito pela equipe: Alex Lucas, Paulo Barreto, Nicolly Mendonça, Tatiana Helena, José Gabriel, Gabriel Albuquerque,
      Arthur Eulálio e Sâmia Clemente</Text>
    </View>
  );
};

// Lista de Tarefas
const ListaTarefasScreen = ({ navigation }) => {
  const [Tarefas, setTarefas] = useState([]);
  const [Texto, setTexto] = useState("");

  // Função para adicionar novas tarefas
  const NovasTarefas = () => {
    if (Texto === "") return;
  
    // Verificar se a tarefa já existe
    const existingTaskIndex = Tarefas.findIndex((task) => task === Texto);
  
    // Se existir, substituir a tarefa existente; se não, adicionar uma nova
    if (existingTaskIndex !== -1) {
      const newTasks = [...Tarefas];
      newTasks[existingTaskIndex] = Texto;
      setTarefas(newTasks);
    } else {
      setTarefas([...Tarefas, Texto]);
    }

    // Limpar o campo de texto após adicionar a tarefa
    setTexto("");
  };

  // Função para lidar com a edição de uma tarefa
  const handleEdit = (editedText, index) => {
    const newTasks = [...Tarefas];
    newTasks[index] = editedText;
    setTarefas(newTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor= {'white'} barStyle="dark-content"/>
      <Text style={styles.tittle}>Minha Lista de Tarefas</Text>
      
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
          return (
            <Todo
              Texto={value}
              key={index}
              onEdit={(editedText) => handleEdit(editedText, index)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Tarefas" component={ListaTarefasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
    // borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginRight: 8,
    borderRadius: 10
  },
  addTodo: {
    backgroundColor: "#435676",
    padding: 8,
    borderRadius: 5,
  },
  tittle:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#435676',
    fontSize: 40,
    marginTop: 5,
    padding: 3
  },
  legend:{
    textAlign: 'center',
    color: '#435676',
    fontSize: 15,
    marginTop: 5,
    padding: 3
  },
  navigateToTasksButton: {
    backgroundColor: "#435676",
    padding: 8,
    borderRadius: 4,
    alignSelf: "center",
    width: "50%",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center", // Centralizar o texto
  },
});
