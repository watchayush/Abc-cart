import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="input-group" style={{ width: "30%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search ......"
        />
        <div className="input-group-append ">
          <span className="input-group-text search_btn">
            <i className="fa fa-search">Search</i>
          </span>
        </div>
      </div>
    );
  }
}
