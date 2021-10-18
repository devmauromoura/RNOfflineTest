import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import Background from '../../components/background';
import Button from '../../components/button';
import {getRealm} from '../../config/realm';
import List from './components/List';
import {TDContainter} from './style';
import uuid from 'react-native-uuid';

const TODOScreen = () => {
  const {useState, useEffect} = React;
  const navigation = useNavigation();
  const [net, setNet] = useState(true);
  const [toDoList, setToDoList] = useState(null);

  useEffect(() => {
    navigation.setOptions({title: 'TODO'});
    getList();
  }, []);

  const handleChangeNet = () => {
    setNet(old => !old);
  };

  const getList = async () => {
    const realm = await getRealm();
    const list = realm.objects('Todo');

    setToDoList(list);
  };

  const createItem = async () => {
    try {
      const realm = await getRealm('Todo');
      await realm.write(() => {
        realm.create('Todo', {
          _id: `${uuid.v4()}`,
          title: `ToDo ${Math.random()}`,
          status: 'TODO',
        });
      });

      getList();
    } catch (error) {
      console.log('error create', error);
    }
  };

  return (
    <Background>
      <TDContainter>
        <Button
          title={`Internet: ${net ? 'ON' : 'OFF'}`}
          action={() => handleChangeNet()}
        />
        <Button title="Adicionar TODO (random)" action={() => createItem()} />
        <List data={toDoList} />
      </TDContainter>
    </Background>
  );
};

export default TODOScreen;
