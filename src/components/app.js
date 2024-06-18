import React, { Component } from "react";
import Navigation from "./navigation";
import PageContent from "./page-content";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>STARTED WITH DevCamp React Starter</h1>
        <Navigation />
        <PageContent />
      </div>
    );
  }
}