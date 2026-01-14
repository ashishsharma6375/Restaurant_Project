import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Success = () => {
  const [countdown, setCountDown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountDown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds....</h1>
        <Link to="/">
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Success;
