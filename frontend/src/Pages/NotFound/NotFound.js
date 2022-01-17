import React from "react";
import { NotFoundStyle } from "../../Styles/NotFoundStyle.js/NotfoundStyle";

const NotFound = () => {
  return (
    <>
      <NotFoundStyle />
      <div>
        <a
          href="https://codepen.io/ZonFire99/full/njdls/"
          className="viewFull"
          target="_parent"
        >
          View in full it looks way better :)
        </a>
        <div className="error">
          <div className="wrap">
            <div className={404}>
              <pre>
                <code>
                  {"\n"}
                  {"   "}
                  <span className="green">&lt;!</span>
                  <span>DOCTYPE html</span>
                  <span className="green">&gt;</span>
                  {"\n"}
                  <span className="orange">&lt;html&gt;</span>
                  {"\n"}
                  {"    "}
                  <span className="orange">&lt;style&gt;</span>
                  {"\n"}
                  {"   "}* {"{"}
                  {"\n"}
                  {"            "}
                  <span className="green">Web Blog</span>:
                  <span className="blue">ReactJs With Love 🥰</span>;{"\n"}
                  {"}"}
                  {"\n"}
                  {"     "}
                  <span className="orange">&lt;/style&gt;</span>
                  {"\n"} <span className="orange">&lt;body&gt;</span> {"\n"}
                  {"              "}ERROR 404!{"\n"}
                  {"        "}FILE NOT FOUND!{"\n"}
                  {"        "}
                  <span className="comment">
                    &lt;!--The file you are looking for, {"\n"}
                    {"          "}is not where you think it is.--&gt;{"\n"}
                    {"    "}
                  </span>
                  {"\n"} <span className="orange" /> {"\n"}
                  {"        "}
                  {"\n"}
                  {"\n"}
                  {"\n"}
                </code>
              </pre>
            </div>
            <code>
              <br />
              <span className="info">
                <br />
                <span className="orange">&nbsp;&lt;/body&gt;</span>
                <br />
                <span className="orange">&lt;/html&gt;</span>
              </span>
            </code>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
