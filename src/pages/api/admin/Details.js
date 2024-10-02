import { Component } from "react";
import Api from "./Api";
class Details extends Component {
  async signup(data) {
    return Api.post("/user/signup", data);
  }
  async login(data) {
    return Api.post("/user/login", data);
  }
  async getFaculty() {
    return Api.get("/about/faculty/get");
  }
  async addFaculty(data) {
    return Api.post("/about/faculty/add", data);
  }
  async moveFaculty(data) {
    return Api.post("/about/faculty/move", data);
  }
  async deleteFaculty(data) {
    return Api.post("/about/faculty/delete", data);
  }  
  async verify() {
    return Api.get("/user/verify");
  }

  async gethomebanner() {
    return Api.get("/home/banner/get");
  }

  async getprinciple() {
    return Api.get("/about/principal/get");
  }

  async getdirector() {
    return Api.get("/about/director/get");
  }

  async getGallery() {
    return Api.get("/facilities/gallery/get");
  }
  async getGallerybyCategory(data) {
    return Api.get(`/facilities/gallery/get/${data}`);
  }


  async getfees() {
    return Api.get("/fees/get");
  }
 
  

  async Adminline() {
    return Api.get("/home/admission/get");
  }
  async resultget(id) {
    return Api.get(`/result/get/${id}`);
  }
 
  // /result/get/XII
   
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Details;