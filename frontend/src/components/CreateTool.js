import { useState } from "react";

const CreateTool = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    //prevent page refresh
    e.preventDefault();

    const toolPost = {name, description, category, quantity, price};

    //api call
    const response = await fetch('/api/tool-data', {
        method: "POST",
        body: JSON.stringify(toolPost),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const jsonData = await response.json()

    if(!response.ok) {
        setError(jsonData.error);
    }

    if(response.ok){
        setName('')
        setDescription('')
        setCategory('')
        setQuantity('')
        setPrice('')
        setError(error)
        console.log("New workout added", jsonData)
    }
  };

  return (


      <form className="tool-form" onSubmit={handleSubmit}>
        <h3>Post a new Tool</h3>

        <label>Post Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Category</label>
        <input
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <label>Quantity</label>
        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />

        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <button>Add Post</button>
        {error && <div className="error">{error}</div>}
      </form>

  
  );
}

export default CreateTool;
