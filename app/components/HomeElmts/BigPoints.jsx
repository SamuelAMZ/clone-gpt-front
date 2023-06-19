import React from "react";

const BigPoints = () => {
  return (
    <div className="kalami-bigpoints-wraper">
      <div className="kalami-points">
        <div className="kalami-point point1">
          {/* img */}
          <img src="/point1.png" alt="" />
          {/* headline */}
          <h3>More Tokens</h3>
          {/* desc */}
          <p>
            Extend your AI's knowledge with Kalami's straightforward large files
            upload. Never worry about token limits as your AI pulls from a rich
            data reservoir.
          </p>
          {/* layer */}
          <img className="point-layer" src="/layer1.png" alt="" />
        </div>
        <div className="kalami-point point2">
          {/* img */}
          <img src="/point2.png" alt="" />
          {/* headline */}
          <h3>Fewer Hallucinations</h3>
          {/* desc */}
          <p>
            Boost your AI's precision with Kalami's context-based approach. We
            turn files into a map, directing AI away from inaccurate or
            unrelated responses.
          </p>
        </div>
        <div className="kalami-point point3">
          {/* img */}
          <img src="/point3.png" alt="" />
          {/* headline */}
          <h3>Personalisations</h3>
          {/* desc */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, in ut
            aliquid libero obcaecati velit.
          </p>
          {/* layer */}
          <img className="point-layer" src="/layer2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BigPoints;
