import React, { useState } from "react";

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
    <div>
      <h1 style={{ margin: "90px auto 50px auto" }}>Client Requests</h1>
      {requests.map((det) => (
        <div class="card">
          <p>Client Name: {det.clientName}</p>
          <p>Case Description: {det.caseDescription}</p>
          <button className="btn">Accept</button>
          <button className="btn">Reject</button>
        </div>
      ))}
    </div>
  );
}

export default ClientRequests;
