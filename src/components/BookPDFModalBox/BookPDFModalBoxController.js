// @flow
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import BookPDFModalBoxView from "./BookPDFModalBoxView";

export const FREE_DOWNLOAD = "free-download";
export const PAID_DOWNLOAD = "paid-download";
export const GET_PRINTED_COPY = "get-printed-copy";

class BookPDFModalBoxController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFeesType: null,
    };
  }
  onFeesTypeChange = (slug) => {
    if (slug !== this.state.selectedFeesType) {
      this.setState({ selectedReportType: slug });
    }
  };

  static propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    selectedItem: PropTypes.object,
  };

  static defaultProps = {};

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <BookPDFModalBoxView
        {...this.props}
        onFeesTypeChange={this.onFeesTypeChange}
      />
    );
  }
}

const mapStateToProps = ({}, ownProps) => {
  return {};
};

const actions = {};
export default connect(mapStateToProps, actions)(BookPDFModalBoxController);
