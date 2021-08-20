import React, {memo} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import {Navigation} from '../types';
import {AutomationUtils} from '../core/AutomationUtils';

const {testProps} = AutomationUtils;

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({navigation}: Props) => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('LoginScreen')}
      {...testProps('btnSignIn')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
      {...testProps('btnSignUp')}>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
