import React, { useState } from "react";
import { LawyerPanel } from "./LawyerPanel";
function ClientRequests() {
  const [requests, setRequests] = useState([
    {
      clientName: "Anand",
      caseDescription:
        "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      clientName: "Ashwin",
      caseDescription:
        "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      clientName: "Chakradar",
      caseDescription:
        "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
  ]);
  return (
    <LawyerPanel title={"Client Requests"}>
      <div>
      {requests.map((det) => (
        <div className="card">
          <p>Client Name: {det.clientName}</p>
          <p>Case Description: {det.caseDescription}</p>
          <button className="btn">Accept</button>
          <button className="btn">Reject</button>
        </div>
      ))}
      </div>
    </LawyerPanel>
  );
}

export default ClientRequests;
