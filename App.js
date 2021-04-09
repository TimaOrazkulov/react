import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import {NewsScreen} from './components/NewsScreen'
function NewsScreen() {
  const style = StyleSheet.create({
    statusbar: {
      flexDirection: 'row',
      backgroundColor: '09DEDF',
      height: '80',
    }
  })
  return(
      <View style={style.statusbar}>

      </View>
  )
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}
function RecycleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recycle!</Text>
    </View>
  );
}
function TopScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Top!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'News') {
              return (
                <Icon                  
                  name='ios-newspaper'
                  type='ionicon'    
                  color = {color}   
                  size = '30px'        
                />
              );
            } else if (route.name === 'Chat') {
              return (
                <Icon                  
                  name='ios-chatbubbles'
                  type='ionicon'       
                  color = {color}  
                  size = '30px'                                
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Icon                  
                  name='ios-person-circle'
                  type='ionicon'   
                  color = {color}    
                  size = '30px'                                    
                />
              );
            }
            else if (route.name === 'Recycle') {
              return (
                <Icon                  
                  name='ios-leaf'
                  type='ionicon'   
                  color = {color}      
                  size = '30px'               
                />
              );
            }
            else if (route.name === 'Top') {
              return (
                <Icon                  
                  name='ios-trophy'
                  type='ionicon'  
                  color = {color}
                  size = '30px'                             
                />
              );
            }
          },
        })}
        tabBarOptions={{          
          activeTintColor: '#09DEDF',
          inactiveTintColor: 'gray',                        
          style: {
            backgroundColor: 'white',
            paddingBottom: 30,
            paddingTop: 5            
          }                              
        }}

      >
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Recycle" component={RecycleScreen} />
        <Tab.Screen name="Top" component={TopScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}