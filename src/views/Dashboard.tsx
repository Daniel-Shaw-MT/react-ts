import React from 'react'
import {TextField} from '../component/TextField';
import {Label} from '../component/Label';
import { Navigation } from '../component/Navigation'

function Dashboard(){
    return (
        <div>
            <Navigation PageTitle="Dashboard"/>
            <h1>Welcome to the dashboard</h1>
            <TextField DefaultText="Username"/>
            <TextField DefaultText="Password"/>
                   
        </div>
    )
}

export default Dashboard;
