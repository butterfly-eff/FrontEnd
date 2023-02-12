import React from 'react';
import NewBarter from '../component/barter/NewBarter';
import Header from '../component/common/Header';
import Layout from '../global/Layout';
function NewBarterPage() {
  return (
    <Layout>
      <Header />
      <NewBarter />
    </Layout>
  );
}

export default NewBarterPage;
