import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import {Button, Input} from "antd";

function App() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/*контейнер для двух элементов, пропс primary делает главной кнопку на сайте*/}
                <div className={styles.inputContainer}>
                    <Input/>
                    <Button type="primary" className={styles.actionButton}>+ Add</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
