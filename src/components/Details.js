import React from 'react'

export const Details = ({ persons, urlId }) => {
    const details = {
        marginTop: "20px",
        borderStyle: "solid",
        borderWidth: "2px",
        wordBreak: 'break-all',
        height: "100%"
    }
    return(
        <div style={details}>
            <h1>Details Part</h1>
            {persons.map((person, i) => (
                person.id === {urlId} ?
                <div key={person.id}>
                    {JSON.stringify(person)}
                </div> : null
            ))}
        </div>
    );
};