import React from 'react'

import Layout from '../../components/Layout'
import IllustrationsRoll from '../../components/IllustrationsRoll'

export default class IllustrationsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <IllustrationsRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
