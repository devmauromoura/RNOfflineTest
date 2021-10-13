import * as React from 'react';
import { FlatList } from 'react-native';
import { LContainer, LItemContainer, LItemID, LItemName, LSearch } from './style';

const List = ({ data }) => {
    const renderItem = ({ item, index }) => (
        <LItemContainer
            key={`${item.id}${index}`}
            onPress={() => console.log("onPress")}
            onLongPress={() => console.log("onLongPress")}
        >
            <LItemID>{item.id}</LItemID>
            <LItemName>{item.name}</LItemName>
        </LItemContainer>
    )
    return (
        <LContainer>
            <LSearch
                placeholder="Procurar ..."
            />
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </LContainer>
    )
}

export default List;