import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import MenuExampleTabularOnLeft from './SideMenu';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    useEffect(() => {
        axios.get<Activity[]>('http://localhost:5000/api/activities')
            .then(response => {
                // console.log(response.data);
                setActivities(response.data);
            })
    }, [])
    return (
      <>
        <NavBar />
        {/* <MenuExampleTabularOnLeft /> */}
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard activities = {activities} />
        </Container>

      </>
    );
}
export default App;
