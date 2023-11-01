import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Appbar, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

import { updateProjeto, insertProjeto, deleteProjeto } from '../services/projeto.services';
//import { ScrollView } from 'react-native-gesture-handler';

const NovoProjeto = ({ route }) => {
  const navigation = useNavigation();
  const {item} = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(date);
  };
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [colaborador, setColaborador] = useState('');
  const [dataInicio, setDataInicio] = useState(new Date().toLocaleDateString('pt-BR'));
  const [dataFim, setDataFim] = useState(new Date().toLocaleDateString('pt-BR'));
  const [tarefa, setTarefa] = useState('');

    useEffect(() => {
      if (item) {
        setDataInicio(item.datainicio);
        setDataFim(item.datafim);
        setDescricao(item.descricao);
        setNome(item.nome);
        setColaborador(item.colaborador);
        setTarefa(item.tarefa);
      }
    }, [item]);
    console.log(dataInicio)
    console.log(dataFim)
  return (
    <Container>
      <Header

        title={'Novo Projeto'} goBack={() => navigation.goBack()} >

        <Appbar.Action icon="check" onPress={() => console.warn('sdfsdf')} />
        {
          <Appbar.Action icon="trash-can" onPress={() => console.warn('abbb')} />
        }
      </Header>
      <ScrollView>
        <Body>

          <Input
            label="Nome do Projeto"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Input
            label="Descrição"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
          />
          <Input
            label="Colaborador"
            value={colaborador}
            onChangeText={(text) => setColaborador(text)}
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onTouchCancel={() => setShow(false)}
              onChange={(event, date) => {
                setShow(false);
                setDataInicio(date.toLocaleDateString('pt-BR'));
              }}
            />
          )}


          <TouchableOpacity onPress={() => showDatepicker()}>
            <Input
              label="Data Início"
              value={dataInicio}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}
              
            />
          </TouchableOpacity>
              
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              onTouchCancel={() => setShow(false)}
              onChange={(event, date) => {
                setShow(false);
                setDataFim(date.toLocaleDateString('pt-BR'));
              }}
            />
          )}


          <TouchableOpacity onPress={() => showDatepicker()}>
            <Input
              label="Data Fim"
              value={dataFim}
              left={<TextInput.Icon icon="calendar" />}
              editable={false}
            />
          </TouchableOpacity>

          <Input
            label="Tarefa"
            value={tarefa}
            onChangeText={(text) => setTarefa(text)}
          />

          <Button
            mode="contained"
            style={styles.buttom}
            color={'#659cf4'}
            onPress={() => console.warn('a')}>
            Salvar
          </Button>

          {
            <Button
              mode="contained"
              color={'red'}
              style={styles.buttom}
              onPress={() => console.warn('abbb')}>
              Excluir
            </Button>
          }
        </Body>
      </ScrollView>
    </Container >
  );
};

const styles = StyleSheet.create({
  buttom: {
    margin: 8
  }
});


export default NovoProjeto;
