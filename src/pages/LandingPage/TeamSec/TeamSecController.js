// @flow
import React from "react";

import TeamSecView from "./TeamSecView";

export default class TeamSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <TeamSecView {...this.props} />;
  }
}
