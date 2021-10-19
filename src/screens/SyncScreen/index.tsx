import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import Background from '../../components/background';
import {getRealm} from '../../config/realm';
import List from './components/List';
import {TDContainter} from './style';
import Button from '../../components/button';

const SyncScreen = () => {
  const {useState, useEffect} = React;
  const navigation = useNavigation();
  const [toDoList, setToDoList] = useState(null);

  useEffect(() => {
    navigation.setOptions({title: 'Sincronização'});
    getList();
  }, []);

  const getList = async () => {
    const realm = await getRealm();
    const list = realm.objects('Todo');

    setToDoList(
      list.filtered("status == 'DONE-SYNC' OR status == 'DELETE-SYNC'"),
    );
  };

  const removeItem = async (id: string) => {
    try {
      const realm = await getRealm('Todo');
      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('Todo', id));
      });
      getList();
    } catch (error) {
      console.log('error remove', error);
    }
  };

  const updateItem = async (id: string) => {
    try {
      const realm = await getRealm('Todo');
      realm.write(() => {
        const item = realm.objectForPrimaryKey('Todo', id);
        item.status = 'DONE';
      });
      getList();
    } catch (error) {
      console.log('error remove', error);
    }
  };

  const handleSync = () => {
    const done = toDoList.filter(i => i.status == 'DONE-SYNC');
    const del = toDoList.filter(i => i.status == 'DELETE-SYNC');

    if (done && done.length > 0) {
      done.map(i => updateItem(i._id));
    }
    if (del && del.length > 0) {
      del.map(i => removeItem(i._id));
    }
  };

  return (
    <Background>
      <TDContainter>
        <List data={toDoList} remove={removeItem} update={updateItem} />
        <Button title="Sincronizar" action={() => handleSync()} />
      </TDContainter>
    </Background>
  );
};

export default SyncScreen;
