import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";  // Adicione o TextInput aqui

const Todo = ({ Texto, onEdit, onDelete }) => {
  const [check, setCheck] = useState(false);
  const [borrar, setborrar] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(Texto);

  const handleEdit = () => {
    setEditing(!editing);
    if (editing) {
      onEdit(editedText);
    }
  };

  return (
<View style={{ ...styles.Todo, display: borrar ? "none" : "flex" }}>
      {!editing ? (
        <>
          <TouchableOpacity
            style={{
              ...styles.Check,
              backgroundColor: check ? "#3BE67C" : "#D13030",
            }}
            onPress={() => setCheck(!check)}
          />
          <Text style={styles.Text}>{Texto}</Text>
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editar}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setborrar(true)}>
            <Text style={styles.borrar}>X</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            style={styles.textinput}
            maxLength={50}
            value={editedText}
            onChangeText={(value) => setEditedText(value)}
          />
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.editar}>Salvar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
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
  editar: {
    textAlign: "center",
    backgroundColor: "#D1D1D1",
    width: 50,
    height: 20,
    alignSelf: "center",
    color: "white",
    borderRadius: 15,
    textAlignVertical: "center",
    marginRight:10,
  },
  textinput: {
    width: 280,
    height: 20,
    
  },
});
