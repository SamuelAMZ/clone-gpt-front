import React from "react";

const Review = () => {
  return (
    <div className="kalami-review-wraper" id="faq">
      <div className="kalami-review">
        <div>
          <h3 className="kalami-faq-title">
            Frequently Asked <span>questions</span>
          </h3>
          <p className="kalami-faq-desc">
            Common Questions Answered - Find quick answers to frequently asked
            questions about our products and services.
          </p>
        </div>

        <div className="kalami-questions-wraper">
          {/* firts list */}
          <div className="kalami-questions-list">
            <div className="kalami-question-group">
              <h4>What is Kalami?</h4>
              <p>
                Kalami is an intuitive application that enables users to
                interact with OpenAI's GPT-4 in a uniquely personalized way.
                Through the platform, you can upload your own data which GPT-4
                uses to generate more relevant and context-aware responses. It's
                all about personalizing your AI conversation experience.
              </p>
            </div>

            <div className="kalami-question-group">
              <h4>Do I need technical knowledge or APIs to use Kalami?</h4>
              <p>
                Absolutely not! Kalami is designed with simplicity and
                ease-of-use in mind. No need for APIs or technical jargon. If
                you can upload a file, you can use Kalami.
              </p>
            </div>
            <div className="kalami-question-group">
              <h4>What types of data can I upload to Kalami?</h4>
              <p>
                You can upload text files or CSV files. Text files are great for
                providing large amounts of textual information, while CSVs are
                perfect for structured data or question-and-answer pairs.
              </p>
            </div>
            <div className="kalami-question-group">
              <h4>What can I use Kalami for?</h4>
              <p>
                The potential applications for Kalami are diverse. You can use
                it for research, data analysis, content creation, education,
                entertainment, software development, customer service, and much
                more.
              </p>
            </div>
          </div>

          {/* second list */}
          <div className="kalami-questions-list">
            <div className="kalami-question-group">
              <h4> Is my data secure when I upload it to Kalami?</h4>
              <p>
                Absolutely. We prioritize the security and privacy of your data
                and follow stringent protocols to ensure it remains safe.
              </p>
            </div>
            <div className="kalami-question-group">
              <h4>How does Kalami improve over time?</h4>
              <p>
                As with any AI-based system, the more data and context Kalami
                has, the better it becomes at providing relevant and accurate
                responses. Plus, we constantly work on updates and improvements
                based on user feedback.
              </p>
            </div>
            <div className="kalami-question-group">
              <h4>
                What is the maximum amount of data I can upload to Kalami?
              </h4>
              <p>
                Our current data limit is specified in our terms of service. For
                specific concerns or needs, we recommend reaching out to our
                customer service team.
              </p>
            </div>
            <div className="kalami-question-group">
              <h4>Is there customer support for Kalami users?</h4>
              <p>
                Definitely! Our customer support team is here to help with any
                questions, concerns, or feedback you have.
              </p>
            </div>
          </div>
        </div>

        {/* layers */}
        <img className="review-layers" src="/layer2.png" alt="" />
        <img className="review-layers" src="/layer5.png" alt="" />
        <img className="review-layers" src="/layer2.png" alt="" />
      </div>
    </div>
  );
};

export default Review;
