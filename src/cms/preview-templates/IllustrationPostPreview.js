import React from 'react'
import PropTypes from 'prop-types'
import { IllustrationPostTemplate } from '../../templates/illustration-post'

const IllustrationPostPreview = ({ entry, widgetFor }) => (
  <IllustrationPostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    category={entry.getIn(['data', 'category'])}
  />
)

IllustrationPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IllustrationPostPreview
