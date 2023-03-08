import React from 'react';
import Layout from '../global/Layout';
import DetailInfoPage from '../component/detail/DetailInfoPage';
import Header from '../component/common/Header';

function DetailPage(props) {
  return (
    <Layout>
      <Header />
      <DetailInfoPage />
    </Layout>
  );
}

export default DetailPage;

