import React from 'react';

import Layout from '../../components/Layout';
import WorksRoll from '../../components/WorksRoll';

export default class WorksIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <section className="section">
                  <h2 className="title is-4 has-text-weight-bold is-bold-light">
                    Works
                  </h2>
                  <div className="container">
                    <div className="content">
                      <WorksRoll />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
