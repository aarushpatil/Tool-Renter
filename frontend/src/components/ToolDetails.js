import { useState } from "react";
const ToolDetails = ({ tool, getToolData}) => {
  const [error, setError] = useState(null);
  const handleDelete = () => {
    const deletePost = async () => {
      //call api to delete post
      const response = await fetch("api/tool-data/" + tool._id, {
        method: "DELETE",
      });

      const jsonData = await response.json;

      if (!response.ok) {
        setError(jsonData.error);
      }
    };

    deletePost();
    getToolData()
  };

  return (
    <div className="tool-data">
      <h2>{tool.name}</h2>
      <h4>Description: {tool.description}</h4>
      <p>
        <strong>Category: </strong>
        {tool.category}
      </p>
      <p><strong>Quantity: </strong>{tool.quantity}</p>

      <p><strong>Price: $</strong>{tool.price}</p>

      <button onClick={handleDelete}>Delete</button>
      {error && <p>{error} </p>}
    </div>
  );
};

export default ToolDetails;
