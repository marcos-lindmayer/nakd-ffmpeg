import React, { Component } from "react";
import FFMPEG from "react-ffmpeg";
// import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
class App extends Component {
  async onFileChange(e) {
    // const ffmpeg = createFFmpeg({
    //   log: true
    // });
    const file = e.target.files[0];
    await FFMPEG.process(
      file,
      '-metadata location="" -metadata location-eng="" -metadata author="" -c:v copy -c:a copy',
      function (e) {
        const video = e.result;
        console.log(video);
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(video);
        a.download = video.name || "linkbox_download"; // Set the file name.
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        //sadasd
      }.bind(this)
    );
    // console.log("1 Loading ffmpeg-core.js");
    // await ffmpeg.load();
    // console.log("2 Start transcoding");
    // ffmpeg.FS("writeFile", "test.avi", await fetchFile("/flame.avi"));
    // await ffmpeg.run("-i", "test.avi", "test.mp4");
    // console.log("3 Complete transcoding");
    // const data = ffmpeg.FS("readFile", "test.mp4");
    // const a = document.createElement("a");
    // a.href = URL.createObjectURL(
    //   new Blob([data.buffer], { type: "video/mp4" })
    // );
    // a.download = "linkbox_download"; // Set the file name.
    // a.style.display = "none";
    // document.body.appendChild(a);
    // a.click();
  }

  render() {
    return (
      <input
        type="file"
        accept="audio/*,video/*"
        onChange={this.onFileChange}
      />
    );
  }
}

export default App;
