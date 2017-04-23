import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuItem } from './src/index';

export default class SideRevealMenuDev extends Component {
  constructor(props) {
    super(props);

    this.onBtnRotate = this.onBtnRotate.bind(this);
  }

  onBtnRotate() {
    this.menu.toggle();
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableNativeFeedback onPress={this.onBtnRotate.bind(this)}>
          <View style={styles.btn}><Text style={{ color: 'white' }}>Rotate</Text></View>
        </TouchableNativeFeedback>

        <Menu ref={component => this.menu = component}>
          <MenuItem>
            <Icon name="address-book" size={30} color="#fff" />
          </MenuItem>
          <MenuItem>
            <Icon name="calendar" size={30} color="#fff" />
          </MenuItem>
          <MenuItem>
            <Icon name="envelope" size={30} color="#fff" />
          </MenuItem>
          <MenuItem>
            <Icon name="info" size={30} color="#fff" />
          </MenuItem>
          <MenuItem>
            <Icon name="user" size={30} color="#fff" />
          </MenuItem>
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  btn: {
    padding: 20, backgroundColor: '#00ab6b', alignItems: 'center', justifyContent: 'center'
  }
});

AppRegistry.registerComponent('SideRevealMenuDev', () => SideRevealMenuDev);
