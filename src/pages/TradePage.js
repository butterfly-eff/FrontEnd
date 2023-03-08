import React from 'react';
import Layout from '../global/Layout';
import Trade from '../component/trade/Trade';
import Header from '../component/common/Header';

function DetailPage(props) {
  return (
    <Layout>
      <Header />
      <Trade />
    </Layout>
  );
}

export default DetailPage;
