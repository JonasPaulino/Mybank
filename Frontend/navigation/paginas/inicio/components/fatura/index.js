import * as React from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import styles from './style';

export const Fatura = (props) => {
    return (
        <View style={styles.baseHeader}>
            <View style={styles.baseHeaderTitle}>
                <Text style={styles.baseHeaderTitleConta}>Fatura</Text>
                <Image style={styles.baseHeaderTitleIco} source={require('../../../../../assets/right.png')}/>
            </View>
            <View>
                <Text style={styles.baseHeaderTitleValor}>R$ {props.total}</Text>
            </View>
            <View style={styles.viewBotao}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pagar fatura</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}