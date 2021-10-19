import * as React from 'react';
import {FlatList} from 'react-native';
import {
  LContainer,
  LIButtonContainer,
  LIButtonText,
  LItemContainer,
  LItemName,
  LSearch,
} from './style';

const List = ({data, remove, update}) => {
  const [dataFiltered, setDataFiltered] = React.useState(null);
  const [textSearch, setTextSearch] = React.useState(null);

  React.useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  const renderItem = ({item, index}) => (
    <LItemContainer key={`${item._id}`} color={item.status}>
      {/* <LItemID>{item.id}</LItemID> */}
      <LItemName>{item.title}</LItemName>
      <LItemName>{item.status}</LItemName>
    </LItemContainer>
  );

  const renderEmpty = () => (
    <LItemContainer>
      <LItemName>Não há dados para sincronizar.</LItemName>
    </LItemContainer>
  );

  const searchInData = text => {
    const list = data.filter(item => item.title.includes(text));
    setDataFiltered(list);
  };

  return (
    <LContainer>
      <LSearch
        placeholder="Procurar ..."
        value={textSearch}
        onChangeText={text => {
          searchInData(text);
          setTextSearch(text);
        }}
      />
      <FlatList
        data={dataFiltered}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </LContainer>
  );
};

export default List;
