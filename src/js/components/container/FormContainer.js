// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Input from "../presentational/Input";
// class FormContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             calendar_title: ""
//         };
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(event) {
//         this.setState({ [event.target.id]: event.target.value });
//     }
//     render() {
//         const { calendar_title } = this.state;
//         return (
//             <form id="article-form">
//                 <Input
//                     text="Calendar Input"
//                     label="calendar_title"
//                     type="text"
//                     id="calendar_title"
//                     value={calendar_title}
//                     handleChange={this.handleChange}
//                 />
//             </form>
//         );
//     }
// }
// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
// export default FormContainer;