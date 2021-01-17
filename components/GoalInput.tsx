import React, { useState } from 'react'
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native'


const GoalInput = (props: any): JSX.Element => {

    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHandler = (enteredText: string): void => { 
        setEnteredGoal(enteredText);
      }

      const addGoalHandler = (): void => {
          props.onAddGoal(enteredGoal);
          setEnteredGoal('');
      }

    return (
        <Modal visible={props.visible} animationType="slide"> 
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Objetivos"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Agregar" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancelar" color="red" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
    input: { 
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%',
      },
      button: {
          width: '40%',
      }
})


export default GoalInput;