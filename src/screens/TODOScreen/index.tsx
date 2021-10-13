import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import Background from '../../components/background';
import Button from '../../components/button';
import List from './components/List';
import { TDContainter } from './style';

const TODOScreen = () => {
    const { useState, useEffect } = React;
    const navigation = useNavigation();
    const [net, setNet] = useState(true);

    useEffect(() => {
        navigation.setOptions({ title: "TODO" })
    }, [])

    const handleChangeNet = () => {
        setNet(old => !old);
    }

    const FakeData = [
        { id: 1, name: 'Exemplo 1' },
        { id: 2, name: 'Exemplo 2' },
        { id: 3, name: 'Exemplo 3' },
        { id: 4, name: 'Exemplo 4' },
        { id: 5, name: 'Exemplo 5' }
    ]

    return (
        <Background>
            <TDContainter>
                <Button
                    title={`Internet: ${net ? 'ON' : 'OFF'}`}
                    action={() => handleChangeNet()}
                />
                <Button
                    title="Adicionar TODO (random)"
                    action={() => { }}
                />
                <List
                    data={FakeData}
                />
            </TDContainter>
        </Background>
    )
}

export default TODOScreen;