import React from 'react';

const CardTitle = ({name, email, phone, address}) => {
    const styles = {
        backgroundColor: '#6D6B91',
        height: '60px',
        padding: '.5em',
        color: 'white'
    }
    return (
        <h1 style={styles}>{name.length > 1 ? name: 'Your name'} </h1>
    )
}



export default CardTitle;