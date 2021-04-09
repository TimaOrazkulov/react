import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class NewsScreen extends React.Component {
    render(){
        return(
            <View style = {style.statusBar}>

            </View>
        )
    }
    
}

const style = StyleSheet.create({
    statusBar: {
        flexDirection: 'row',
        height: '80px',
        backgroundColor: '09DEDF'         
    }
})
