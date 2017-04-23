import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import MenuItem from './menuItem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: this.props.isOpened || true
        }
    }

    startAnimation(_toValue) {
        let _self = this;

        this.children.forEach(function (child, index) {
            this.refs[child.ref].animate(_toValue, index * 50);
        }, this);
    }

    show() {
        this.setState({ isOpened: true });
        this.startAnimation(0);
    }

    hide() {
        this.setState({ isOpened: false });
        this.startAnimation(90);
    }

    toggle() {
        this.state.isOpened ? this.hide() : this.show();
    }

    render() {
        //child elements are created dynamically so we need to clone them and add ref and key props so we can reference them later on
        this.children = this.props.children.map((child, index) => {
            return React.cloneElement(child, {
                ref: 'item' + index,
                key: 'item' + index
            });
        });
        return (<View style={styles.menu} ref={component => this.menu = component}>
            {this.children}
        </View>);
    }
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});