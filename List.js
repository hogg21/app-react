import React, { useState } from 'react';

const List = () => {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        const randomNumber = Math.round(Math.random() * 10);
        const newArr = [...numbers, randomNumber]
        setNumbers(newArr)
    }
    React.useEffect(() => {
        console.log('DID MOUNT');
        return () => {
            console.log('WILL MOUNT');
        }
    });

    

    return (
        <div>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Добавить новое число</button>
        </div>
    )
}
export default List;