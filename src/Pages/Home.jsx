import React, { useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "../Components/Card";
import eventsService from "../Services/events";
import CreateEvent from "../Components/CreateEvent";
import reducers from "../reducers/events";

const HomePage = () => {
  const initialEventState = {events: [], recommendedEvents: []}

  const [eventsStore, dispatchEvents] = useReducer(
    reducers.eventsReducer,
    initialEventState.events
  );

  const [recommendedEventsStore, dispatchRecommendedEvents] = useReducer(
    reducers.recommendedEventsReducer,
    initialEventState.recommendedEvents
  );

  useEffect(() => {
    eventsService.recommendedEvents().then((response) => {
      dispatchRecommendedEvents({
        type: 'GET_ALL_RECOMMENDED_EVENTS',
        recommendedEvents: response.events,
      });
    });

    eventsService.events().then((response) => {
      dispatchEvents({
        type: 'GET_ALL_EVENTS',
        events: response.events,
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Container className="p-3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">Welcome To Fig Finance proto</h1>
          <h2>
            <ButtonToolbar className="custom-btn-toolbar">
              <CreateEvent dispatch={dispatchEvents}/>
            </ButtonToolbar>
          </h2>
        </Container>
      </Container>
      <Container>
        <h5>
         Your recommended events <Badge pill bg="danger">Recommended</Badge>
        </h5>
        <Row>
          {recommendedEventsStore.length && recommendedEventsStore.map((event) => {
            return <Card event={event}/>;
          })}
        </Row>
      </Container>
      <br />
      <Container>
        <h1>Events</h1>
        <Row>
          {eventsStore.length && eventsStore.map((event) => {
             return <Card event={event} />;
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
