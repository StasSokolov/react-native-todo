import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Task = ({text, completeTask, id}) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={() => completeTask(id)}/>
                <Text style={styles.taskText}>{text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderRadius: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    taskText: {
        paddingLeft: 15,
        maxWidth: '80%'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap"
    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#55BCF6'
    }
})

export default Task