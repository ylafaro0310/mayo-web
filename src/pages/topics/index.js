import React from "react";

import Layout from "../../components/Layout";
import TopicsRoll from "../../components/TopicsRoll";

export default class TopicsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-text-centered">
          <div className="container">
            <div className="columns">
              <div className="column"/>
              <div className="column is-four-fifths">
                <section className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    トピック
                  </h2>
                  <div className="container">
                    <div className="content">
                      <TopicsRoll />
                    </div>
                  </div>
                </section>
              </div>
              <div className="column"/>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
