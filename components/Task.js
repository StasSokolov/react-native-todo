import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Task = ({text}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.square}/>
            </View>
            <Text style={styles.taskText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 20,
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
        paddingLeft: 15
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5
    }
})

export default Task