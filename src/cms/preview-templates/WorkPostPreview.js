import React from "react";
import PropTypes from "prop-types";
import { WorkPostTemplate } from "../../templates/work-post";

const WorkPostPreview = ({ entry, widgetFor }) => (
  <WorkPostTemplate
    content={widgetFor("body")}
    title={entry.getIn(["data", "title"])}
    category={entry.getIn(["data", "category"])}
  />
);

WorkPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WorkPostPreview;
