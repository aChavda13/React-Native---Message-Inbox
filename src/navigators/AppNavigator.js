import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Container, Header, Content, Body } from "native-base";
import { Button, StyleSheet, View, Image } from 'react-native';

import Inbox from '../components/Inbox';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('../../Images/Profile.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>

);

const RootNavigator = DrawerNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
  Inbox: { screen: Inbox }
},
  {
    initialRouteName: 'Login',
    contentComponent: CustomDrawerContentComponent,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 200
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawerHeader: {
      height: 100,
      backgroundColor: '#fff'
    },
    drawerImage: {
      height: 50,
      width: 50,
      borderRadius: 75,
      paddingLeft: 50
    }
  });

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
