import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';


export const UserList = ({ persons }) => {
    return (
        <div>
            <h1>User List</h1>
            {persons.map((person, i) => (
                <div key={person.id}>
                    <li>
                        <BrowserRouter>
                            <Link to={"/" + person.id}>
                                {person.id} &nbsp;
                                <span>{person.login}</span>
                            </Link>
                        </BrowserRouter>
                    </li>
                </div>
            ))}
        </div>
    );
};