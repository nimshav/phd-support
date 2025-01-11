import React from "react";
import "./index.css";

function LandingPage() {
  const [activeTab, setActiveTab] = React.useState("about-me");

  const tabs = [
    { id: "about-me", label: "About Me", content: (
      <div>
        <h2>About Me</h2>
        <p>I am Nimrod Shavit a researcher in the field of communication and the humanities with extensive experience in academic mentoring and editing</p>
        <p>Advanced degrees from Israel and the US with publications in leading journals</p>
        <p>Personalized approach tailored to each client</p>
        <p>Proficiency in English and expertise in advanced tools like AI</p>
        <a href="https://dry-hamlet-69726-31baf6235fe7.herokuapp.com/#teaching">Link to full profile</a>
      </div>
    ) },
    { id: "services", label: "Key Services", content: (
      <div>
        <h2>Key Services</h2>
        <ul>
          <li>Research Guidance Support for MA and PhD students as well as institutional researchers stuck in academic writing</li>
          <li>Personalized Meetings Tailored one-on-one sessions focused on specific project needs</li>
          <li>Problem-Solving Assistance in writing research proposals designing methodologies and analyzing results</li>
          <li>Outline and Timeline Creation Custom schedules adapted to client availability</li>
          <li>Time Management Strategies Techniques to optimize research and writing workflows</li>
          <li>AI Tools Training Guidance on using advanced tools like ChatGPT and writing custom scripts</li>
          <li>Editing Structural stylistic and rational editing as well as proofreading</li>
          <li>Adherence to Scientific Standards Formatting and writing in accordance with standards like APA or MLA</li>
        </ul>
      </div>
    ) },
    { id: "delivery", label: "Service Delivery Options", content: (
      <div>
        <h2>Service Delivery Options</h2>
        <ul>
          <li><strong>Intensive</strong> Frequent weekly or bi-weekly meetings for high-priority or demanding projects</li>
          <li><strong>Regular</strong> Meetings at key points in the research process such as chapter submissions or the end of data collection</li>
          <li><strong>Minimal</strong> Monthly or on-demand meetings to address specific challenges or provide direction</li>
        </ul>
      </div>
    ) },
    { id: "testimonials", label: "Client Testimonials", content: (
      <div>
        <h2>Client Testimonials</h2>
        <ul>
          <li><strong>Asaf</strong> Creative solutions for lesson planning and academic projects PhD Hebrew</li>
          <li><strong>Alina</strong> Writing articles and publishing internationally PhD English</li>
          <li><strong>Liene</strong> Editing and writing tailored for an international audience PhD English</li>
          <li><strong>Anna</strong> Submission of a quality thesis proposal MA Hebrew</li>
        </ul>
      </div>
    ) },
    { id: "resources", label: "Resources", content: (
      <div>
        <h2>Resources</h2>
        <ul>
          <li>Guide to Academic Structure A detailed guide on how to structure academic work effectively</li>
          <li>Sample Editing Work Examples showcasing stylistic structural and writing adjustments</li>
          <li>AI Tips and Tools Tips and tools for efficient research and writing using AI</li>
        </ul>
      </div>
    ) },
    { id: "contact", label: "Contact", content: (
      <div>
        <h2>Contact</h2>
        <p>Email <a href="mailto:nshavit@icloud.com">nshavit@icloud.com</a></p>
        <p>Follow my profiles</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/nimrod-shavit-6707a7345/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fi%2Fflow%2Flogin" target="_blank" rel="noopener noreferrer">
              Twitter Civic Engagement
            </a>
          </li>
          <li>
            <a href="https://open-source-humanities-bf6815244991.herokuapp.com" target="_blank" rel="noopener noreferrer">
              Explore our resources and projects supporting accessible humanities education
            </a>
          </li>
        </ul>
      </div>
    ) },
  ];

  return (
    <div className="landing-page">
      <header>
        <h1>Doctoral Support</h1>
        <p>Your partner in academic success</p>
        <p><a href="https://phd-support-heb-4d69597ae1b4.herokuapp.com" target="_blank" rel="noopener noreferrer">To the Hebrew Website</a></p>
      </header>
      <div className="tabs">
        {tabs.map(tab => (
          <button key={tab.id} className="tab-button" onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default LandingPage;


