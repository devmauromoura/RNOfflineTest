import * as React from 'react';

import { Safe, Container } from './style';

const Background: React.FC = ({ children }) => {
    return (
        <Safe>
            <Container>
                {children}
            </Container>
        </Safe>
    )
}

export default Background;