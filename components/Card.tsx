import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CardProps {
    children: any;
    style: any
}

function Card(props: CardProps) {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 5,
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    }
});

export default Card;