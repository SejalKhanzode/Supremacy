import React, { useEffect, useState } from "react";
import { getAllDataStructures } from "../../../services/operations/topicAPI";
// import TopicContent from "./TopicContent";
import { Outlet, useNavigate } from "react-router-dom";

const DataStructures = () => {
  const [dsTopics, setDsTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDsTopics = async () => {
      const result = await getAllDataStructures();
      setDsTopics(result);
    };
    fetchDsTopics();
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      {/* Left Sidebar with Topics */}
      <div className="w-[300px] border-r border-gray-300 h-[calc(100vh-3.5rem)] overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Data Structures</h2>
          {dsTopics.map((topic) => (
            <div
              key={topic._id}
              onClick={() => handleTopicClick(topic)}
              className={`p-3 cursor-pointer rounded-md mb-2 ${
                selectedTopic?._id === topic._id
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-100"
              }`}
            >
              <h3 className="font-semibold">{topic.topicName}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          {selectedTopic ? (
            <div>
              <h1 className="text-2xl font-bold mb-4">
                {selectedTopic.topicName}
              </h1>
              <p className="text-gray-600 mb-6">{selectedTopic.description}</p>
              <div className="mt-4">
                <img 
                  src={selectedTopic.thumbnail || "/path/to/default-thumbnail.jpg"} 
                  alt={selectedTopic.topicName}
                  className="w-full max-w-[400px] h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-600">
              Select a topic from the sidebar to view its content
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DataStructures;
