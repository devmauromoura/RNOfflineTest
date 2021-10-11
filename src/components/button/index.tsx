import * as React from 'react';
import { Container, Text } from './style';

interface IButton {
    title: string;
    action: () => void;
}

const Button: React.FC<IButton> = ({ title, action }) => {
    return (
        <Container onPress={action}>
            <Text>{title}</Text>
        </Container>
    )
}

export default Button;