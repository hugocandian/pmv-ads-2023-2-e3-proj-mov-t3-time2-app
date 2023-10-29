import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = ({ title, goBack, children }) => {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  return (
    <Appbar.Header style={styles.container}>
      {
        goBack &&
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content style={styles.content} title={title} />
      {children}
      <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
    </Appbar.Header>);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 0,
    height: 70
  },
});

export default Header;
