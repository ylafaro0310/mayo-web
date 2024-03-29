import React from "react";

import Layout from "../../components/Layout";
import WorksRoll from "../../components/WorksRoll";

export default class WorksIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section has-text-centered">
          <div className="container">
            <div className="columns"> 
              <div className="column"></div>
              <div className="column is-four-fifths">
                <section className="section">
                  <h2 className="title is-4 has-text-weight-bold is-bold-light">
                    制作・コラボ
                  </h2>
                  <div className="container">
                    <div className="content">
                      <WorksRoll />
                    </div>
                  </div>
                </section>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
