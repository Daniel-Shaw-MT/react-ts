import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    PageTitle: string;
}

export const Navigation: React.FC<Props> = ({
    PageTitle,
    
}) => {

    return (
        <div>
            <h1>{PageTitle}</h1>
            <nav
                style={{
                    borderBottom: '1px solid',
                    paddingBottom: "1rem"
                }}>
                <Link to="/">Home</Link>  |{" "}
                <Link to="/dashboard">Dashboard</Link> |{" "}
                <Link to="/list">List</Link>
            </nav>
        </div>
    )
}


