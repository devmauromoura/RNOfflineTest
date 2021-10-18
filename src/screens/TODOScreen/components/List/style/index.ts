import styled from 'styled-components/native';
import colors from '../../../../../assets/colors';

export const LContainer = styled.View`
  flex: 1;
`;
export const LSearch = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${colors.primary};
`;

export const LItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 5px;
  height: 50px;
  align-items: center;
  background-color: ${colors.secondary};
  margin-top: 5px;
`;
export const LItemID = styled.Text`
  font-weight: bold;
  margin-right: 5px;
`;
export const LItemName = styled.Text``;
