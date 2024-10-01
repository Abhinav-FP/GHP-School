import { Component } from "react";
import Api from "./Api";
class Listings extends Component {
  // Signup api
  async home_banner() {
    return Api.get("/home/banner/get");
  }



  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Listings;
