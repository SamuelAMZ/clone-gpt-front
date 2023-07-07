"use client";

import React, { useEffect } from "react";
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const Faq = () => {
  useEffect(() => {
    new Accordion('.accordion-container');
  }, []);
  return (
    <div className="faq">
      <div className="header">
        <h1>Frequently Asked Questions</h1>
        <p>
          TrainMyAI is a self-hosted knowledge base and AI chatbot which lets
          your customers or employees get answers from your content using.
        </p>
      </div>
      <div className="faq-accordion">
        <div className="accordion-container">
          <div className="ac">
            <h2 className="ac-header">
              <button type="button" className="ac-trigger">
                Lorem ipsum dolor sit amet.
              </button>
            </h2>
            <div className="ac-panel">
              <p className="ac-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="ac">
            <h2 className="ac-header">
              <button type="button" className="ac-trigger">
                Lorem ipsum dolor sit amet.
              </button>
            </h2>
            <div className="ac-panel">
              <p className="ac-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="ac">
            <h2 className="ac-header">
              <button type="button" className="ac-trigger">
                Lorem ipsum dolor sit amet.
              </button>
            </h2>
            <div className="ac-panel">
              <p className="ac-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
