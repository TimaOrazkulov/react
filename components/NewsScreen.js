import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';

export const NewsScreen = props => {
    return(
        <View style={style.body}>
            <View style={style.statusBar}>
                <Text style={style.statusBarText}>News</Text>
            </View>                                     
        </View>        
    )
}
const style = StyleSheet.create({
    body:{
        height: '100%',
    },
    statusBar: {
        flexDirection: 'row',
        height: 70,      
        justifyContent: 'center',
        alignItems: 'flex-end',  
        backgroundColor: '#09DEDF',
        paddingBottom: 5,        
    },
    statusBarText: {
        fontSize: 20
    }
})
