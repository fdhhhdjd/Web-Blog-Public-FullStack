import React, { useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SinglePostStyle } from "../../Styles/SingleItemStyle/SinglePostStyle";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, GetIdPostInitiate } from "../../redux/Action/ActionPost";
import moment from "moment";
import swal from "sweetalert";
import axios from "axios";
import { toast } from "react-toastify";
import { GlobalState } from "../../Contexts/GlobalState";
const SinglePost = () => {
  const { idPost } = useSelector((state) => state.post);
  const { profile, refreshTokens } = useSelector((state) => state.auth);
  const state = useContext(GlobalState);
  const navigate = useNavigate();
  const [callback, setCallback] = state.callback;
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    console.log("id", id);
    try {
      setLoading(true);
      return await swal({
        title: "Are you sure you want delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(
            `/api/post/delete/${id}`,

            {
              headers: {
                Authorization: `${refreshTokens}`,
              },
            }
          );
          setCallback(!callback);
          setLoading(false);
          navigate("/allPost");

          swal("Delete successfully, wait Loading... 😉 !", {
            icon: "success",
          });
        } else {
          swal("Thank you for 😆'!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SinglePostStyle />
      <div className="singlePost">
        <div className="singlePostWrapper">
          {idPost.photo && (
            <img src={idPost.photo.url} alt="" className="singlePostImg" />
          )}
          <h1 className="singlePostTitle">
            {idPost.title}
            <div className="singlePostEdit">
              <Link to={`/writeEdit/${idPost._id}`}>
                <i className="singlePostIcon far fa-edit"></i>
              </Link>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={() => handleDelete(idPost._id)}
              ></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  {idPost.author}
                </Link>
              </b>
            </span>
            <span>{moment(idPost.createdAt).fromNow()}</span>
          </div>
          <div className="singlePostInfo">
            <span>
              Feeling:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  {idPost.status ? idPost.status : "No feed"}
                </Link>
              </b>
            </span>
          </div>

          <p className="singlePostDesc">{idPost.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
