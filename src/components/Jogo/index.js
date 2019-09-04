import React from 'react';
import Card from '../../objects/Card';
import Player from '../../objects/Player';
import './styles.css';

const Jogo = () => {
    return (
        <Card className="header">
            <Player player='o'/>
        </Card>
    )
}

export default Jogo;