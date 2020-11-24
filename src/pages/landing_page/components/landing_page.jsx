import React from 'react';
import InputNickname from './input_nickname';
import ButtonStart from './ButtonStart';
import styles from './styles/landing_page.module.css';



const LandingPage =()=> {



    return(
        <div className={styles.landing_container}>

            <div>
                <h1>Welcome to our brand new gaming house</h1>
            </div>

            <div>
                <h3>Pick a username to start</h3>
            </div>

            <div>
                <InputNickname/>
                <ButtonStart/>
            </div>
        </div>
    )
}

  

export default LandingPage;