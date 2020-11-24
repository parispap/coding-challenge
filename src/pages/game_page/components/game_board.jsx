import React from 'react';
import Card from './card';
import styles from './styles/game_board.module.css';

const GameBoard = () => {
    return(
        <div className={styles.board_container}>

            <div className={styles.inner_board_container}>
            
                <Card/>
            

            
                <Card/>
            

            
                <Card/>
            

            
                <Card/>
                </div>
            

        </div>
    )
}

export default GameBoard;