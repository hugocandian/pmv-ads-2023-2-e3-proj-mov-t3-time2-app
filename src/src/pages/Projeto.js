import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';

import { getProjeto } from '../services/projeto.services.js';

const DATA = [
  {
    id: 1,
    nome: 'Limpa Arquivo',
    descricao: 'Devolver todo o arquivo físico dos clientes ate o fim do ano.',
    colaborador: 'Junia Campos',
    dataInicio: '01/01/2023',
    dataFim: '31/12/2023',
    tarefa1: 'Fazer levantamento empresas',
    tarefa2: 'Arquivar documentos pendentes',
    tarefa3: 'Organizar Caixas',
    tarefa4: 'Entregar ao cliente',
  },
  {
    id: 2,
    nome: 'Happy Boss',
    descricao: 'Não reclame e deixe seu chefe feliz.',
    colaborador: 'Julia Campos',
    dataInicio: '05/01/2023',
    dataFim: '...',
    tarefa1: 'Pense antes de reclamar.',
    tarefa2: 'Não respire perto dele.',
  },
  {
    id: 3,
    nome: 'Happy Boss',
    descricao: 'Não reclame e deixe seu chefe feliz.',
    colaborador: 'Julia Campos',
    dataInicio: '05/01/2023',
    dataFim: '...',
    tarefa1: 'Pense antes de reclamar.',
    tarefa2: 'Não respire perto dele.',
  },
];

const Projeto = ({navigation}) => {

  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    getProjeto().then((dados) => {
      console.log(dados);
      setProjeto(dados);
    });
  }, []);

  const renderitem = ({ item }) => (
    <List.Item
      title={'Projeto ' + item.nome}
      description={item.descricao}
      left={(props) => <List.Icon {...props} icon="clipboard-outline" />}
      onPress={() => navigation.navigate('novoProjeto', {item})}
    />
  );

  return (
    <Container>
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderitem}
          keyExtractor={(item) => item.id}
        />
      </Body>
      <FAB
        icon="plus"
        label='Criar projeto'
        style={styles.fab}
        onPress={() => navigation.navigate('novoProjeto')}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#659cf4',
  },
});

export default Projeto;
