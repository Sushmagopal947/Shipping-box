import React,{useState} from 'react'


function ShippingForm(props) {
    const [title, setTitle]=useState("");
    const [weight, setWeight]=useState("");
    const [color, setColor]=useState("");
    const [place, setPlace]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
           
    const data={
        itemName: title,
        weight: weight,
        color: color,
        place: place
    }
    props.addToListCallback(data)
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3 className='sp' >ShippingForm</h3>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} /><br></br>
        <input type="number" value={weight} placeholder="weight" onChange={(e) => setWeight(e.target.value)} /><br></br>
        <label>color</label><br></br>
        <input type="color" value={color} placeholder="color" onChange={(e) => setColor(e.target.value)} /><br></br>
        <input type="text"value={place} placeholder="place" onChange={(e) => setPlace(e.target.value)} /><br></br>
        <button>Submit</button><br></br>
        </form>
    </div>
  )
}

export default ShippingForm