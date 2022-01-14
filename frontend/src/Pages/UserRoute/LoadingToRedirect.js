import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
const LoadingToRedirect = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate("/login");
    count === 0 && toast.warning("Please Login when you to the website 😵");
    return () => clearInterval(interval);
  }, [count, navigate]);
  return <Loading />;
};

export default LoadingToRedirect;
