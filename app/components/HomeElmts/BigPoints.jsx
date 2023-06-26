import React from "react";

const BigPoints = () => {
  return (
    <div className="kalami-bigpoints-wraper">
      <div className="kalami-points">
        <div className="kalami-point point1">
          {/* img */}
          <img src="/point1.png" alt="" />
          {/* headline */}
          <h3>Upload Your Data</h3>
          {/* desc */}
          <p>
            Upload your data to unlock enhanced AI experiences with Kalami's
            advanced integration.
          </p>
          {/* layer */}
          {/* <img className="point-layer" src="/layer1.png" alt="" /> */}
        </div>
        <div className="kalami-point point2">
          {/* img */}
          <img src="/point2.png" alt="" />
          {/* headline */}
          <h3>Fewer Hallucinations</h3>
          {/* desc */}
          <p>
            Enhance contextual understanding in AI conversations, delivering
            tailored responses with Kalami.
          </p>
        </div>
        <div className="kalami-point point3">
          {/* img */}
          <img src="/point3.png" alt="" />
          {/* headline */}
          <h3>Instant Connectivity, No APIs</h3>
          {/* desc */}
          <p>
            Seamlessly train and personalize your chats without the hassle of
            APIs or third-party services
          </p>
          {/* layer */}
          <img className="point-layer" src="/layer2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BigPoints;
