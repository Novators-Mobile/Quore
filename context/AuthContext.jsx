import axios from 'axios';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { BASE_URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const register = (data) => {
  //   fetch('https://novatorsmobile.ru/api/register', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(
  //         'POST Response',
  //         'Response Body -> ' + JSON.stringify(responseData)
  //       );
  //     });
  // };

  const [userInfo, setUserInfo] = useState({});

  const login = (data) => {
    axios
      .post('https://novatorsmobile.ru/api/login', data)
      .then((res) => {
        let userInfo = res.data;
        // console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // console.log(userInfo);
      })
      .catch((e) => {
        console.log(`log err ${e}`);
      });
  };

  const register = (data) => {
    axios
      .post('https://novatorsmobile.ru/api/register', data)
      .then((res) => {
        let userInfo = res.config;
        // console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        // console.log(userInfo);
      })
      .catch((e) => {
        console.log(`reg err ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{ userInfo, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
