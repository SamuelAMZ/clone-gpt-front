import React from "react";

const Grids = () => {
  return (
    <div className="kalami-grids-wraper">
      <div className="kalami-grid-parent">
        <h3>
          File types we <span>support</span>
        </h3>
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
            <p>
              At present, our services include comprehensive support for PDF
              files, and use of the content as context.
            </p>
          </div>
          <div className="kalami-grid gitem2">
            {/* img */}
            <img src="/grid2.png" alt="" />
            {/* headline */}
            <h4>External Site Module</h4>
            {/* desc */}
            <p>
              You can share the URLs of your data sources with Kalami, enabling
              it to visit and leverage them as contextual references.
            </p>
          </div>
          <div className="kalami-grid gitem3">
            {/* img */}
            <img src="/grid3.png" alt="" />
            {/* headline */}
            <h4>Copy And Paste Texts </h4>
            {/* desc */}
            <p>
              Copy and paste your text content for Kalami to incorporate as
              context during your discussions.
            </p>
          </div>
          <div className="kalami-grid gitem4">
            {/* img */}
            <img src="/grid4.png" alt="" />
            {/* headline */}
            <h4>API Request Module</h4>
            {/* desc */}
            <p>
              Configure API calls to pull data for dynamic context. Kalami
              leverages it in your chats
            </p>
            <span>Coming Soon</span>
          </div>
          <div className="kalami-grid gitem5">
            {/* img */}
            <img src="/grid5.png" alt="" />
            {/* headline */}
            <h4>Github Repos</h4>
            {/* desc */}
            <p>
              Import your Github repository content directly to enhance the
              context of your conversation
            </p>
            <span>Coming Soon</span>
          </div>
          <div className="kalami-grid gitem6">
            {/* img */}
            <img src="/grid6.png" alt="" />
            {/* headline */}
            <h4>Google Drive Files</h4>
            {/* desc */}
            <p>
              Upload any supported document from your Google Drive. Kalami makes
              it part of the dialogue
            </p>
            <span>Coming Soon</span>
          </div>
        </div>
        {/* <p className="kalami-more">And More...</p> */}
      </div>
    </div>
  );
};

export default Grids;
