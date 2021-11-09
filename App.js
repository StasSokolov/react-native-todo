import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.sectionTitle}>Today`s Tasks</Text>

                <View style={styles.items}>
                    {/* This is were the tasks */}
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
    items: {}
});
