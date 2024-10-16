import { Component } from "react";
import RenderApi from "./RenderApi";

class RenderDetails extends Component {
  async donationUserAdd(data) {
    return RenderApi.post("/donation/user/add", data);
  }
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default RenderDetails;