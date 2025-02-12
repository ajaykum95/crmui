// import React, { useState } from "react";
// import { Card, CardContent, Button, Modal, Input, Textarea } from "@mui/material";

// const Content = () => {
//   const [opportunities, setOpportunities] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     amount: "",
//     description: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddOpportunity = () => {
//     setOpportunities((prev) => [...prev, formData]);
//     setFormData({ name: "", amount: "", description: "" });
//     setShowModal(false);
//   };

//   return (
//     <div className="p-4">
//       <Card className="mb-4">
//         <CardContent className="flex justify-between items-center">
//           <h2 className="text-lg font-bold">Opportunities ({opportunities.length})</h2>
//           <Button onClick={() => setShowModal(true)}>Add Opportunity</Button>
//         </CardContent>
//       </Card>

//       {opportunities.length === 0 ? (
//         <Card className="text-center p-4">
//           <CardContent>
//             <p>Identify and keep track of deals.</p>
//             <Button onClick={() => setShowModal(true)}>Add Opportunity</Button>
//           </CardContent>
//         </Card>
//       ) : (
//         <div className="grid gap-4">
//           {opportunities.map((opportunity, index) => (
//             <Card key={index} className="p-4">
//               <CardContent>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="font-bold">{opportunity.name}</p>
//                     <p>${opportunity.amount}</p>
//                   </div>
//                 </div>
//                 <p className="mt-2">{opportunity.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}

//       {showModal && (
//         <Modal open={showModal} onClose={() => setShowModal(false)}>
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-4">Add Opportunity</h2>
//             <Input
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Opportunity Name"
//               className="mb-4"
//             />
//             <Input
//               name="amount"
//               value={formData.amount}
//               onChange={handleInputChange}
//               placeholder="Amount"
//               className="mb-4"
//             />
//             <Textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Description"
//               className="mb-4"
//             />
//             <Button onClick={handleAddOpportunity}>Add</Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Content;

import React from "react";
import { Box,Typography } from "@mui/material";
import Design from "./Design";

const Content=()=>{
    return(
        <>
        <Box sx={{textAlign:"center"}}>
            <Typography>Identify and keep track of deals.</Typography>
            <Typography color="primary">Add Opportunity</Typography>
            <Design/>
        </Box>
        </>
    )
}
export default Content;
// import React, { useState } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import Design from "./Design";
// import EditForm from "./EditForm";

// const Content = () => {
//   const [opportunities, setOpportunities] = useState([
//     {
//       id: 1,
//       amount: 500,
//       date: "2025-02-05",
//       salesProcess: "WON",
//       contact: "Nick Persico",
//       notes: "Track deals in your pipeline.",
//     },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const handleEdit = (data) => {
//     setEditData(data);
//     setIsEditing(true);
//   };

//   const handleDelete = (id) => {
//     setOpportunities(opportunities.filter((opp) => opp.id !== id));
//   };

//   const handleSave = (data) => {
//     if (data.id) {
//       // Update existing opportunity
//       setOpportunities((prev) =>
//         prev.map((opp) => (opp.id === data.id ? data : opp))
//       );
//     } else {
//       // Add new opportunity
//       const newOpportunity = { ...data, id: Date.now() };
//       setOpportunities((prev) => [...prev, newOpportunity]);
//     }
//     setIsEditing(false);
//     setEditData(null);
//   };

//   return (
//     <Box sx={{ textAlign: "center", p: 3 }}>
//       {opportunities.length === 0 && !isEditing ? (
//         <>
//           <Typography>Identify and keep track of deals.</Typography>
//           <Button
//             color="primary"
//             variant="contained"
//             sx={{ mt: 2 }}
//             onClick={() => setIsEditing(true)}
//           >
//             Add Opportunity
//           </Button>
//         </>
//       ) : isEditing ? (
//         <EditForm data={editData} onSave={handleSave} onCancel={() => setIsEditing(false)} />
//       ) : (
//         opportunities.map((opportunity) => (
//           <Design
//             key={opportunity.id}
//             data={opportunity}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))
//       )}
//     </Box>
//   );
// };

// export default Content;
