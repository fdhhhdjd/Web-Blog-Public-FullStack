import React, { Fragment, useEffect, useState, useContext } from "react";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { WriteStyle } from "../../Styles/WriteStyle/WriteStyle";
import { LoadingSmall, MetaData, TopBar } from "../../Imports/Index";
import { feed } from "../../Utils/Data/SliderImg";
import { GlobalState } from "../../Contexts/GlobalState";
import { useNavigate, useParams } from "react-router-dom";
const initialState = {
  title: "",
  desc: "",
  status: "",
};
const WriteEdit = () => {
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const { allPost } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  const [states, setState] = useState(initialState);
  const [callback, setCallback] = state.callback;
  const { title, desc, status, author } = states;
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      allPost.forEach((product) => {
        if (product._id == id) {
          setState(product);
          setImages(product.photo);
        }
      });
    } else {
      setState(initialState);
      setImages(false);
    }
  }, [id, allPost]);
  const img =
    "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setState({ ...states, [name]: value });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `${refreshTokens}`,
        },
      });

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!images)
      return swal("No Image Upload 😅.", {
        icon: "error",
      });
    try {
      await axios.put(
        `/api/post/edit/${id}`,
        { ...states, photo: images },
        {
          headers: {
            Authorization: `${refreshTokens}`,
          },
        }
      );
      swal("Edit write Successfully", {
        icon: "success",
      });
      setState({ title: "", desc: "", status: "" });
      setCallback(!callback);
      navigate(`/single/${id}`);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: {
            Authorization: ` ${refreshTokens}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };
  return (
    <>
      <TopBar />
      <WriteStyle />
      <MetaData title="EditWrite-Blog-Dev" />
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
        {images ? "" : <img src={img} alt="" className="writeImg" />}
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <LoadingSmall />
          </div>
        ) : (
          images && (
            <img
              src={images ? images.url : images}
              alt=""
              style={styleUpload}
              className="writeImg"
            />
          )
        )}

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            {images ? (
              <>
                <label>
                  <i
                    className="writeIcon  fa fa-times"
                    onClick={handleDestroy}
                  ></i>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
              </>
            ) : (
              <>
                <label htmlFor="fileInput">
                  <i className="writeIcon fas fa-plus"></i>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleUpload}
                />
              </>
            )}

            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              name="title"
              value={states.title}
              autoFocus={true}
              onChange={handleChangeInput}
            />
          </div>
          <div className="writeFormGroup">
            <label htmlFor="">
              <i class=" writeIcon far fa-smile"></i>
            </label>
            &nbsp; &nbsp;
            <select
              className="select"
              name="status"
              value={states.status}
              onChange={handleChangeInput}
            >
              <option value="0">Choose Feed 😷:</option>
              {feed.map((item) => {
                return (
                  <option value={item.msg} key={item.value}>
                    {item.msg}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              name="desc"
              value={desc}
              autoFocus={true}
              onChange={handleChangeInput}
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

export default WriteEdit;
