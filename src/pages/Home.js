import React from 'react';
import styled from 'styled-components';
import Layout from '../global/Layout';
function Home() {
  return (
    <div>
      <Layout>
        <Test>
          <TestS>Hometest</TestS>
          <TestS>Hometest</TestS>
        </Test>
      </Layout>
    </div>
  );
}

export default Home;

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const TestS = styled.div`
  width: 90%;
  max-width: 500px;
  min-width: 360px;
  height: 90%;
  max-height: 500px;
  min-height: 300px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

