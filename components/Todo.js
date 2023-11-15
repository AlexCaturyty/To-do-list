import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Todo = ({ Texto }) => {
  const [check, setCheck] = useState(false);
  const [borrar, setborrar] = useState(false)

  return (
    <View style={{...Estilo.Todo, display: (borrar)? 'none': 'flex'}}>
      <TouchableOpacity
        style={{
          ...Estilo.Check,
          backgroundColor: check ? "#3BE67C" : "#D13030",
        }}
        onPress={() => setCheck(!check)}
      />
      <Text style={Estilo.Text}>{Texto}</Text>
      <TouchableOpacity onPress={()=>setborrar(true)}>
        <Text style={Estilo.borrar}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const Estilo = StyleSheet.create({
  Todo: {
    borderWidth: 1,
    borderColor: "#435676",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    margin: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Text: {
    fontSize: 16,
    flex: 1,
    color: "black",
  },
  Check: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    marginRight: 8,
    borderRadius: 15,
  },
  borrar: {
    textAlign: "center",
    backgroundColor: "#D1D1D1",
    width: 20,
    height: 20,
    alignSelf: "center",
    color: "white",
    borderRadius: 15,
    textAlignVertical: "center",
  },
});
