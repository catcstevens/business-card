import React from 'react'
import CardTitle from './CardTitle'

const Card = (props) => {
    const {name, surname, email, phone, address} = props
    const {number, street, suburb, state, postcode, country} = address 
    const cardStyles = {
        width: '40vw'
    }
    const sectionStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        color: "darkgray",
        marginTop: ".5em"
    }
    const valueStyles = {
        color: "black",
        marginLeft: ".5em"
    }
    const countryStyles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    }

    const hrStyles = {
        color: "gray",
        margin: "0",
        width: "40vw"
    }
    return (
        <div style={cardStyles}>
            <CardTitle name={`${name} ${surname}`} />
            <div style={sectionStyles}>
                <div>EMAIL</div>
                <div style={valueStyles}>{email}</div>
            </div>
            <hr style={hrStyles} />
            <div style={sectionStyles}>
                <div>PHONE</div>
                <div style={valueStyles}>{phone}</div>
            </div>
            <hr style={hrStyles} />
            <div style={sectionStyles}>
                <div>ADDRESS</div>
                <div style={valueStyles}>{`${number} ${street} ${suburb} ${state}`}</div>
            </div>
            <hr style={hrStyles} />
            <div style={countryStyles}>
                <div style={sectionStyles}>
                    <div>POSTCODE</div>
                    <div style={valueStyles}>{postcode}</div>
                </div>
                <div style={sectionStyles}>
                    <div>COUNTRY</div>
                    <div style={valueStyles}>{country}</div>
                </div>
            </div>
            <hr style={hrStyles} />
        </div>
    )
    
}

export default Card