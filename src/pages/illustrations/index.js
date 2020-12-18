import React from 'react';

import Layout from '../../components/Layout';
import IllustrationsRoll from '../../components/IllustrationsRoll';

export default class IllustrationsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <section className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Illustrations
                  </h2>
                  <div className="container">
                    <div className="content">
                      <IllustrationsRoll />
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
