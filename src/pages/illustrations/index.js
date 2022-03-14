import React from "react";

import Layout from "../../components/Layout";
import IllustrationsRoll from "../../components/IllustrationsRoll";

export default class IllustrationsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-text-centered ">
          <div className="container">
            <div className="columns">
              <div className="column"/>
              <div className="column is-four-fifths">
                <section className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    イラスト
                  </h2>
                  <div className="container">
                    <div className="content">
                      <IllustrationsRoll />
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
