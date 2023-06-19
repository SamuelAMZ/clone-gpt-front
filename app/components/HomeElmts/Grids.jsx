import React from "react";

const Grids = () => {
  return (
    <div className="kalami-grids-wraper">
      <div className="kalami-grid-parent">
        <h3>How Momint Books simplifies GST accounting</h3>
        <img className="grid-layers" src="/layer3.png" alt="" />
        <img className="grid-layers" src="/layer4.png" alt="" />
        <img className="grid-layers" src="/layer2.png" alt="" />
        <div className="kalami-grids">
          <div className="kalami-grid gitem1">
            {/* img */}
            <img src="/grid1.png" alt="" />
            {/* headline */}
            <h4>PDF Files</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="kalami-grid gitem2">
            {/* img */}
            <img src="/grid2.png" alt="" />
            {/* headline */}
            <h4>Copy And Paste Texts</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="kalami-grid gitem3">
            {/* img */}
            <img src="/grid3.png" alt="" />
            {/* headline */}
            <h4>API Request Module</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="kalami-grid gitem4">
            {/* img */}
            <img src="/grid4.png" alt="" />
            {/* headline */}
            <h4>External Site Module</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="kalami-grid gitem5">
            {/* img */}
            <img src="/grid5.png" alt="" />
            {/* headline */}
            <h4>Google Drive Files</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="kalami-grid gitem6 n">
            {/* img */}
            <img src="/grid6.png" alt="" />
            {/* headline */}
            <h4>Github Repos</h4>
            {/* desc */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grids;
