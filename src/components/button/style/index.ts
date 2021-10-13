import styled from 'styled-components/native';
import colors from '../../../assets/colors';

export const Container = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-radius: 3px;
    border-color: ${colors.primary};
    margin-bottom: 5px;
`;

export const Text = styled.Text`

`;