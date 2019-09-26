import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import {Button, Checkbox, Input} from "antd";

function App() {
    const todos = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/*контейнер для двух элементов, пропс primary делает главной кнопку на сайте*/}
                <div className={styles.inputContainer}>
                    <Input/>
                    <Button type="primary" className={styles.actionButton}>+ Add</Button>
                </div>

                {/*сделать цикл и вывести 10 элементов*/}
                {todos.map(()=> <TodoItem/>)}

                <TodoItem/>
            </div>
        </div>
    );
}

function TodoItem() {
    return (
        <div className={styles.listContainer}>
            <div className={styles.listItem}>
                <Checkbox/>
                <h2 className={styles.todoTitle}>buy fruits</h2>
            </div>
        </div>
    )
}

export default App;
