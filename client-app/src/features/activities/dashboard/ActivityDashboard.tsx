import { Grid } from "semantic-ui-react";
import React from 'react';
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetalis from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity|undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}
export default function ActivityDashboard({activities,selectActivity,selectedActivity,cancelSelectActivity}: Props){
    return (
      <Grid>
        <Grid.Column width="10">
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid.Column>
        <Grid.Column width="6">
          {selectedActivity && <ActivityDetalis activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
          <ActivityForm />
        </Grid.Column>
      </Grid>
    );
}