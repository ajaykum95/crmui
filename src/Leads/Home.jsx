import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const leads = [
        { id: 1, lead: "John Doe", client: "XYZ Corp", contact: "john.doe@example.com", status: "Interested" },
        { id: 2, lead: "Jane Smith", client: "ABC Ltd", contact: "jane.smith@example.com", status: "Potential" },
        { id: 3, lead: "Sam Wilson", client: "PQR Inc", contact: "sam.wilson@example.com", status: "Loss" },
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Column for Heading */}
                <div className="col-12">
                    <h2 className="ml-60 pt-20">Leads</h2>
                </div>
            </div>
            <div className="row">
                {/* Column for Subheading */}
                <div className="col-12">
                    <h5 className="ml-60" id="leads">Managing the Leads</h5>
                </div>
            </div>
            <div className="row">
                {/* Table */}
                <div className="col-12 pt-3">
                    <div className="table-responsive table-light" style={{ marginLeft: "240px" }}>
                        <table className="table table-sm table-bordered table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: "38px" }}>
                                        <input type="checkbox" />
                                    </th>
                                    <th style={{ width: "150px" }}>Lead</th>
                                    <th style={{ width: "150px" }}>Client</th>
                                    <th style={{ width: "203px" }}>Contacts</th>
                                    <th style={{ width: "30px" }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead) => (
                                    <tr key={lead.id}>
                                        <td>
                                            <input type="checkbox" />
                                        </td>
                                        <td>
                                            {/* Link to a dynamic route for each lead */}
                                        <Link to={`/lead/${lead.id}`} className="text-decoration-none text-primary">
                                         {lead.lead}
                                                  </Link>

                                        </td>
                                        <td>{lead.client}</td>
                                        <td>{lead.contact}</td>
                                        <td>{lead.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
