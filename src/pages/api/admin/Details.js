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
    return Api.get("/user/profile");
  }

  async gethomebanner() {
    return Api.get("/home/banner/get");
  }
  async addhomebanner(data) {
    return Api.post("/home/banner/add", data);
  }

  async getprinciple() {
    return Api.get("/about/principal/get");
  }

  async addprinciple(data) {
    return Api.post("/about/principal/edit", data);

  }

  async paymentget() {
    return Api.get("/payment/paymentget");

  }

  async Sysllabas() {
    return Api.get("/academics/syllabus/get");

  }

  async SysllabasAdd(data) {
    return Api.post("/academics/syllabus/add", data);

  }

  async SysllabasDelete(data) {
    return Api.post("/academics/syllabus/delete", data);

  }

  async getdirector() {
    return Api.get("/about/director/get");
  }
  async editdirector(data) {
    return Api.post("/about/director/edit", data);
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

  async feesAdd(data) {
    return Api.post("/fees/add", data);
  }

  
  async feesEdit(data) {
    return Api.post("/fees/edit", data);
  }

  async feedelete(data) {
    return Api.post("/fees/delete", data);
  }
  async vacancyget() {
    return Api.get("/career/vacancy/get");
  }

  async vacancypost(data) {
    return Api.post("/career/vacancy/add", data);
  }
  async vacancydelete(data) {
    return Api.post("/career/vacancy/delete", data);
  }
  async vacancyapply(data) {
    return Api.post("/career/apply", data);
  }

  async careerget() {
    return Api.get("/career/apply/get");
  }

  async Adminline() {
    return Api.get("/home/admission/get");
  }


  async inquiryAdd(data) {
    return Api.post("/inquiry/add", data);
  }

  async inquirydelete(id) {
    return Api.post("/inquiry/delete", id);
  }
  async inquiryget() {
    return Api.get("/inquiry/get");
  }

  async donationAdd(data) {
    return Api.post("/donation/add", data);
  }

  async donationUserAdd(data) {
    return Api.post("/donation/user/add", data);
  }

  async donationdelete(data) {
    return Api.post("/donation/delete", data);
  }
  async donationgetwithId(data) {
    return Api.get(`/donation/get/${data}`);
  }
  async donationget() {
    return Api.get(`/donation/get/`);
  }
  async vacancyGet() {
    return Api.get(`/career/vacancy/get`);
  }

  async syllabusGet() {
    return Api.get(`/academics/syllabus/get`);
  }
  async syllabusAdd(data) {
    return Api.post(`/academics/syllabus/add`,data);}
    
  async AddCard(data) {
    return Api.post(`/payment/create`, data);
  }

  async PaymentSave(data) {
    return Api.post(`/payment/verify-payment`, data);
  }

  async AdmissionFormAdd(data) {
    return Api.post(`/admissionform/add`, data);
  }

  async ResultGet() {
    return Api.get(`/result/get`);
  }

  async ResultAdd(data) {
    return Api.post(`/result/add` ,data);
  }
  async ResultDelete(data) {
    return Api.post(`/result/delete`, data);
  }

  async BannerGet() {
    return Api.get(`/home/banner/get`);
  }

  async BannerDelete(data) {
    return Api.post(`/home/banner/delete`, data);
  }

  

  async admissionGet() {
    return Api.get(`/home/admission/get`);
  }

  async admissionPost(data) {
    return Api.post(`/home/admission/show`, data);
  }
  async admissionEdit(data) {
    return Api.post(`/home/admission/text`, data);
  }
  async admissionForm() {
    return Api.get(`/admissionform/get`,);
  }

  
  render() {
    return (
      <div>
        <></>
      </div>
    );
  }
}

export default Details;