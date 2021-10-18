import * as React from 'react';
import {FlatList} from 'react-native';
import {LContainer, LItemContainer, LItemID, LItemName, LSearch} from './style';

const List = ({data}) => {
  const renderItem = ({item, index}) => (
    <LItemContainer
      key={`${item._id}`}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('onLongPress')}>
      {/* <LItemID>{item.id}</LItemID> */}
      <LItemName>{item.title}</LItemName>
    </LItemContainer>
  );

  const renderEmpty = () => (
    <LItemContainer>
      <LItemName>Não há dados.</LItemName>
    </LItemContainer>
  );
  return (
    <LContainer>
      <LSearch placeholder="Procurar ..." />
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </LContainer>
  );
};

export default List;
