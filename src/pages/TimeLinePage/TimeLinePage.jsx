import { useContext, useState } from "react";
import { TimelineContext } from "../../Context/TimelineContext";
import callImg from "/assets/call.png";
import textImg from "/assets/text.png";
import videoImg from "/assets/video.png";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("Timeline");

  const filteredTimeline = timeline.filter(item => {
    if (filter === "Timeline") return true;
    return item.type === filter;
  });

  return (
    <div className="max-w-4xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">Timeline</h1>

      <div className="mb-8 flex justify-start">

        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter: {filter}
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            <li><button onClick={() => setFilter("Timeline")}>Timeline</button></li>
            <li><button onClick={() => setFilter("Call")}> Call</button></li>
            <li><button onClick={() => setFilter("Text")}> Text</button></li>
            <li><button onClick={() => setFilter("Video")}>Video</button></li>
          </ul>
        </div>

      </div>

      {filteredTimeline.length === 0 ? (
        <div className="text-gray-500">
          No activity found for {filter}
        </div>
      ) : (
       <div className="space-y-4">
  {filteredTimeline.map(item => (
    <div
      key={item.id}
      className="flex items-center gap-4 px-5 py-3 bg-base-100 shadow rounded-md"
    >
      {item.type === "Call" && (
        <img src={callImg} alt="Call" className="w-10 h-10" />
      )}

      {item.type === "Text" && (
        <img src={textImg} alt="Text" className="w-10 h-10" />
      )}

      {item.type === "Video" && (
        <img src={videoImg} alt="Video" className="w-10 h-10" />
      )}
      <div>
        <p className="font-bold text-lg">
          {item.type} with{" "}
          <span className="">{item.name}</span>
        </p>

        <p className="text-sm text-gray-500">
          {new Date(item.time).toLocaleString()}
        </p>
      </div>
    </div>
  ))}
</div>
      )}

    </div>
  );
};

export default TimelinePage;