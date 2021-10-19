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
  background-color: ${({done}) => (done ? colors.done : colors.secondary)};
  margin-top: 5px;
  justify-content: space-around;
`;
export const LItemID = styled.Text`
  font-weight: bold;
  margin-right: 5px;
`;
export const LItemName = styled.Text``;

export const LIButtonContainer = styled.TouchableOpacity`
  width: 60px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: ${({error}) => (error ? colors.error : colors.success)};
`;

export const LIButtonText = styled.Text``;
