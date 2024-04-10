import { ScrollView, Text, TextInput, Button, StyleSheet, Platform, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task';
import { addTask, toggleStatus } from '../store/tasks/tasks.slice'
import { useState } from 'react';

export default function Main() {
    const [taskText, setTaskText] = useState('');

    const tasks = useSelector(state => state.tasks)
    console.log(state.tasks)
    const dispatch = useDispatch()


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>ToDo App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={taskText}
                    onChangeText={text => setTaskText(text)}
                    textAlignVertical="top"
                    multiline={true}
                    style={styles.textInput}
                    placeholder='Enter the text...'
                />
                <View style={styles.buttonContainer}>
                    <Button title='Refresh' />
                    <Button 
                        title='Submit'
                        color={'green'}
                        onPress={() => dispatch(addTask({ id: Date.now(), text: taskText, status: true }))} // Generate unique id
                    />
                </View>
            </View>

            {tasks.length > 0 && tasks.map(task => ( // Check if tasks exist before mapping
                <Task key={task.id} task={task} changeStatus={() => dispatch(toggleStatus(task.id))} />
            ))}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === 'android' ? 40 : 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        height: 80,
        fontSize: 18,
        flex: 1,
        marginRight: 10
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 70
    }
})