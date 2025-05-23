import React, { useState } from "react"; // Removed useCallback, ResourceUploadModal, UploadCloudIcon
import Notes from "./Notes";
import PYQs from "./PYQs";
import Syllabus from "./Syllabus";

const Contributions = () => {
  const [activeTab, setActiveTab] = useState("Notes");

  const [uploadCounter, setUploadCounter] = useState(0); 

  

  // tabs
  const tabs = [
    { name: "Notes", path: "/" },
    { name: "PYQs", path: "/academics" },
    { name: "Syllabus", path: "/placements" },
  ];
  return (
    <div>
      {" "}
      <p className="text-3xl font-bold ">Your Contributions</p>
      <p className="text-base ">Resources you've shared with the community.</p>
      <div className="flex flex-wrap  gap-2 py-2 px-2 sm:w-fit border mt-2 rounded-lg w-full">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-1 rounded border  cursor-pointer ${
              activeTab === tab.name ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {activeTab === "Notes" ? (
        <Notes key={`notes-${uploadCounter}`} /> 
      ) : activeTab === "PYQs" ? (
        <PYQs key={`pyqs-${uploadCounter}`} />
      ) : activeTab === "Syllabus" ? (
        <Syllabus key={`syllabus-${uploadCounter}`} />
      ) : null}
      
      {/* The general upload button and ResourceUploadModal instance are removed from here */}
    </div>
  );
};

export default Contributions;
