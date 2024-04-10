import { MaterialIcons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'


export default function Task({ task, deleteTask, changeStatus }) {
    return (
        <View key={task.id} style={[styles.noteContainer, { backgroundColor: task.status ? 'green' : 'transparent' }]}>
            <TouchableOpacity style={styles.checkbox} onPress={() => changeStatus(task.id)}>
                {task.status ? <MaterialIcons name="check" size={24} color="black" /> : null}
            </TouchableOpacity>
            <Text style={styles.noteText}>{task.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.closeIcon}>
                <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    noteText: {
        flex: 1,
        fontSize: 18,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 10,
        marginTop: 5,

    },
    closeIcon: {
        marginLeft: 'auto',
    }
})