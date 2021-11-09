import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Task from "./components/Task";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.sectionTitle}>Today`s Tasks</Text>

                <View style={styles.items}>
                    <Task text={'Task 1'}/>
                    <Task text={'Task 2'}/>
                    <Task text={'Task 3'}/>
                    <Task text={'Task 4'}/>
                    <Task text={'Task 5'}/>
                    <Task text={'Task 6'}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    wrapper: {
        paddingTop: 94,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30
    }
});
