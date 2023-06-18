import React from "react";

const BigPoints = () => {
  return (
    <div className="kalami-bigpoints-wraper">
      <div className="kalami-points">
        <div className="kalami-point point1">
          {/* img */}
          <img src="point1.png" alt="" />
          {/* headline */}
          <h3>headline 1</h3>
          {/* desc */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in ut
            aliquid libero obcaecati velit.
          </p>
          {/* layer */}
          <img className="point-layer" src="layer1.png" alt="" />
        </div>
        <div className="kalami-point point2">
          {/* img */}
          <img src="point2.png" alt="" />
          {/* headline */}
          <h3>headline 2</h3>
          {/* desc */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in ut
            aliquid libero obcaecati velit.
          </p>
        </div>
        <div className="kalami-point point3">
          {/* img */}
          <img src="point3.png" alt="" />
          {/* headline */}
          <h3>headline 3</h3>
          {/* desc */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in ut
            aliquid libero obcaecati velit.
          </p>
          {/* layer */}
          <img className="point-layer" src="layer2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BigPoints;
