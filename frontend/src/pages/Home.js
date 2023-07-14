import { useEffect, useState } from "react";
import ToolDetails from "../components/ToolDetails";

const Home = () => {
  const [tools, setTools] = useState(null);

  const getToolData = async () => {
    const response = await fetch('/api/tool-data')
    const json = await response.json()
    console.log(json)
    if(response.ok) {
      console.log("Response is ok")
      setTools(json)
    }
    else{
      console.log("response not ok")
    }
  }

  //first time app is rendered
    useEffect(() => {
        getToolData()
    },[])




  return (
    <div className="Home">
      <div className="ToolData">
        {tools && tools.map((tool) => (
          <ToolDetails key={tool._id} tool = {tool} getToolData = {getToolData} />
        ))}
      </div>
    </div>
  );
}

export default Home;
