import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export const Home = ({ func, touchProps, styles }) => {
  return (
    <View onLayout={func}>
      <View style={{ marginBottom: 200 }}>
        <Text style={styles.title}>QUORE</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={{ width: 234, fontSize: 15, color: '#ffffff' }}>
          Создайте новый аккаунт или войдите, чтобы продолжить.
        </Text>

        <TouchableHighlight {...touchProps} style={styles.button}>
          <Text style={{ textAlign: 'center', color: '#ffffff' }}>
            Создать аккаунт
          </Text>
        </TouchableHighlight>

        <TouchableHighlight {...touchProps} style={styles.button}>
          <Text style={{ textAlign: 'center', color: '#ffffff' }}>Войти</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
