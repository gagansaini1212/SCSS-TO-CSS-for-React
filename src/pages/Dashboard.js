import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .icon {
    margin: 1px 10px;
    width: 30px;
    height: 30px;
  }
  h5 {
    padding: 7px 4px;
  }
`;

const Dashboard = () => (
  <Container className="section">
    <div className="columns">
      <div className="column">
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-user has-text-black" />
          Account Profile
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="fas fa-search has-text-black icon fas" />
          Event Search
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-envelope has-text-black" />
          Inbox
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-male has-text-black" />
          Subscribe
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-cog has-text-black" />
          Setting
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-calendar-minus has-text-black" />
          Event
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-user has-text-black" />
          Feed
        </h5>
        <h5 className="is-size-4 has-text-grey">
          {' '}
          <i className="icon fas fa-user has-text-black" />
          Account Profile
        </h5>
      </div>
      <div className="column">Third column</div>
      <div className="column">Fourth column</div>
    </div>
  </Container>
);
export default Dashboard;
