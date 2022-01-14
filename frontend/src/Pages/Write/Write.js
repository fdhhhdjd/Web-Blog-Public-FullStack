import React from "react";
import { WriteStyle } from "../../Styles/WriteStyle/WriteStyle";
import { MetaData, TopBar } from "../../Imports/Index";
const Write = () => {
  return (
    <>
      <TopBar />
      <WriteStyle />
      <MetaData title="Write-Blog-Dev" />
      <marquee
        behavior="scroll"
        className="marquee1"
        style={{ fontSize: "22px" }}
      >
        Chào mừng bạn Web Blog ở đây bạn có thể giải bày những tâm sự của mình
        và lan tỏa đến mọi người,bạn cứ mạnh dạn và chia sẽ admin sẽ luôn dữ bí
        mật nhất dành cho bạn cảm ơn bạn nhiều 😉!
      </marquee>
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
};

export default Write;
