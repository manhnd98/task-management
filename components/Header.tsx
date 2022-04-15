import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
    title: string;
}

function Header(props: HeaderProps) {
    return <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>;
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#1D9BF6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        
    }
})

export default Header;