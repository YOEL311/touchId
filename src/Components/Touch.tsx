'use strict';
import React, {Component, useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import TouchID from 'react-native-touch-id';

export default function FingerPrint() {
  const [biometryType, setBiometryType] = useState<any>(null);

  useEffect(() => {
    TouchID.isSupported().then((biometryType) => {
      setBiometryType(biometryType);
    });
  }, []);

  function clickHandler() {
    TouchID.isSupported()
      .then(authenticate)
      .catch((_error) => {
        Alert.alert('TouchID not supported');
      });
  }

  function authenticate() {
    return TouchID.authenticate()
      .then((_success: any) => {
        console.log(_success);
        Alert.alert('Authenticated Successfully');
      })
      .catch((error: {message: any}) => {
        console.log(error);
        Alert.alert(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.btn}
        onPress={clickHandler}
        underlayColor="#0380BE"
        activeOpacity={1}>
        <Text style={{color: '#fff', fontWeight: '600'}}>
          {`Authenticate with ${biometryType}`}
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    borderRadius: 3,
    marginTop: 200,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#0391D7',
  },
});
