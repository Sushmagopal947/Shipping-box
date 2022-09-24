import React, { useState } from 'react'
import ShippingForm from './ShippingForm';

function ShippingList() {
    const [items, setItems] = useState([]);
    const addToList = item => {
        console.log(item);
        const itemsCopy = [...items];
        itemsCopy.push(item)
        setItems(itemsCopy);
    };
  return (
    <div>
        <ShippingForm addToListCallback={(value) => addToList(value) } />
        <table>
                <th>title</th>
                <th>Weight</th>
                <th>color</th>
                <th>Place</th>
                <tbody>
                    {
                    items.map(item => {
                        return (
                            <tr key={item.title}>
                            <td>{item.itemName}</td>
                            <td>{item.weight}</td>
                            <td>
                                <div style={{backgroundColor: item.color,width: "90px",height:"30px", }}></div>
                            </td>
                            <td>{item.place}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
        </table>

    </div>
  )
}
export default ShippingList