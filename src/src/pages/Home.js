import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Avatar, List } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

function ProjetoScreen() {
  return (
    <View>
      <List.Item
        title="Projeto Hora do almoço"
        description="Empresa"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="To Do"
        description="Tarefas da casa"
        left={props => <List.Icon {...props} icon="folder" />}
      />
      <List.Item
        title="Making money"
        description="Financeiro"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    </View>
  );
}

function EmAndamentoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Em andamento</Text>
    </View>
  );
}

function FinalizadosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Finalizados</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Projeto = () => {

  return (
    <Container>
      <Header title="TaskBook" />
      <Body>
        <View style={styles.usuario}>
          <Avatar.Text size={48} label="H" />
          <Text style={styles.usuarioTxt}> Hugo Ferreira</Text>
        </View>
      </Body>

      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Projetos" component={ProjetoScreen} />
          <Tab.Screen name="Em Andamento" component={EmAndamentoScreen} />
          <Tab.Screen name="Finalizados" component={FinalizadosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  usuario: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8
  },
  usuarioTxt: {
    paddingLeft: 16,
    fontSize: 18
  }
});

export default Projeto;
