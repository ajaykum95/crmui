import React from "react";
import { SlCalender } from "react-icons/sl";
import {MdInbox, MdOutlineEmail ,MdCall,MdOutlineTaskAlt
  } from "react-icons/md";
  
const Inbox = ({ inboxCount, doneCount, futureCount }) => {
    const data = [
        { name: "Gst Registration", action: "Follow up $15000 opportunity" },
        { name: "Ajay Kumar", action: "Received SMS" },
        { name: "Gst Registration", action: "Follow up $15000 opportunity" },
        { name: "Ajay Kumar", action: "Received SMS" },
        { name: "Gst Registration", action: "Follow up $15000 opportunity" },
        { name: "Ajay Kumar", action: "Received SMS" },
      ];
    
    return (
        <>
        <nav id="nav">
            <button aria-label={`Inbox: ${inboxCount}`} id="btn">Inbox ({inboxCount})</button>
            <button aria-label={`Done: ${doneCount}` } >Done ({doneCount})</button>
            <button aria-label={`Future: ${futureCount}`} >Future ({futureCount})</button>
            <SlCalender />
            </nav>
            <div>
            <MdInbox className="text-gray-600 text-xl mr-3 ml-[300px]" /> 
                <p className="ml-[300px]">
            ALL Items
                </p>
                <MdOutlineEmail className="ml-[300px]" />
                <p>Emails</p>
                <MdOutlineTaskAlt className="ml-[300px]"/>
                <p>Tasks</p>
                <MdCall  className="ml-[300px]" />
                <p>Calls</p>
            </div>
            <div style={{ padding: "20px", marginLeft:"300px"}}>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Select</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                <input type="checkbox" />
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            </>

    );
};

export default Inbox;
