import React from 'react'

import Layout from '../../components/Layout'
import WorksRoll from '../../components/WorksRoll'

export default class WorksIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <section className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
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
    )
  }
}
