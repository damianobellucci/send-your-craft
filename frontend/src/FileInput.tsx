import React from "react";
import axios from "axios";

class FileInput extends React.Component {
  fileInput: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    //alert(`Selected file - ${this.fileInput.current.files[0].name}`);
    const url = "http://localhost:5000/upload";
    console.log(this.fileInput.current.files[0].name);

    const formData = new FormData();
    formData.append("filetoupload", this.fileInput.current.files[0]);

    axios
      .post(url, formData)
      .catch((err) => console.log(err))
      .then((res) => console.log(res));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" accept="audio/*" ref={this.fileInput}></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
