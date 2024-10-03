import React from "react";
import "./stylesheets/faq.css";

function faq() {
  return (
    <div className="main-faq">
      {/* <Header /> */}
      <div className="faq-section">
        <label id="l8">F.A.Q</label>
        <div id="qna-section">
          <div className="qna">
            <div className="question">
              What do you do for security? Are my messages secure?
            </div>
            <div className="answer">
              Messages never touch our servers. They're sent directly to the
              platforms, preserving end-to-end encryption. Texts app works like
              the official app does. What happens if you get hacked?Our servers
              host no sensitive data, messages or account credentials. All your
              data stays on-device. Your data continues to stay secure in the
              event of a security breach.
            </div>
          </div>
          <div className="qna">
            <div className="question">What happens if you get hacked?</div>
            <div className="answer">
              Our servers host no sensitive data, messages or account
              credentials. All your data stays on-device. Your data continues to
              stay secure in the event of a security breach.
            </div>
          </div>
          <div className="qna">
            <div className="question">Where can I run the app?</div>
            <div className="answer">
              Texts app runs on macOS, Windows and Linux while Beeper is
              available for desktop, iOS and Android. What messaging platforms
              do you support?iMessage (only on macOS), SMS (with iMessage),
              WhatsApp, Telegram, Signal, Messenger, X (Twitter), Instagram,
              LinkedIn, IRC, Slack and Discord DMs.
            </div>
          </div>
          <div className="qna">
            <div className="question">How do you make money?</div>
            <div className="answer">
              Texts charges users a monthly subscription starting
              at $12.50/month (billed yearly) for access to additional features
              of the app.
            </div>
          </div>
          <div className="qna">
            <div className="question">How does it work technically?</div>
            <div className="answer">
              All integrations were implemented in-house using the Texts
              Platform SDK.
            </div>
          </div>
          <div className="qna">
            <div className="question">How does it work technically?</div>
            <div className="answer">
              All integrations were implemented in-house using the Texts
              Platform SDK.
            </div>
          </div>
          <div className="qna">
            <div className="question">
              What is the difference between Texts and Beeper?
            </div>
            <div className="answer">
              Texts runs entirely on device while Beeper runs on cloud. We are
              working on a combined app with the best features of both.
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default faq;
