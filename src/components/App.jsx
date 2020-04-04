import React, { Component } from "react";
import Header from "components/UI/Header";
import styles from "styles/styles.scss";

export default class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <Header />
      </div>
    );
  }
}
