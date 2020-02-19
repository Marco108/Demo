import React from 'react';
import img from './android/app/src/main/assets/image/malle.png'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Image source={img} style={{ width: 400 }}></Image>
        <View>
          <View style={styles.icon}>
            <Icon name='user' size={30}></Icon>
          </View>
          <TextInput style={styles.input} placeholder='User Name'></TextInput>
        </View>
        <View>
          <View style={styles.icon}>
            <Icon name='phone' size={30}></Icon>
          </View>
          <View style={styles.iconeye}>
            <Icon name='eye' size={30}></Icon>
          </View>
          <TextInput style={styles.input}
            placeholder='Password'
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.btnEnter}>
          <Text style={styles.btnTextEnter}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  wellcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderRadius: 15
  },
  input: {
    margin: 15,
    height: 40,
    padding: 5,
    fontSize: 16,
    marginLeft: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#428AF8'
  },
  btnEnter: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#428AF8',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    marginTop: 30
  },
  btnTextEnter: {
    color: '#ffffff',
    fontWeight: '700'
  },
  icon: {
    position: 'absolute',
    top: 25,
    left: 10
  },
  iconeye: {
    position: 'absolute',
    top: 25,
    left: 370
  }

})
