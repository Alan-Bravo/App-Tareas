import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(): JSX.Element {

  const [courseGoals, setCourseGoals] = useState<any[] | undefined[]>([]);
  const [isAddMode, setIsAddMode] = useState<boolean>(false);


  const addGoalHandler = (goalTitle: object): void => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId: object): any | undefined => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = (): void => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Agregar Tarea" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => 
                      <GoalItem 
                        id={itemData.item.id} 
                        onDelete={removeGoalHandler} 
                        title={itemData.item.value} 
                      />
                    } 
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
