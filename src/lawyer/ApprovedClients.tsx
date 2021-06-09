import React from "react";
import { APPROVED_CLIENTS } from "./constants/ApprovedClientsConstants";
import ApprovedClientsBox from "../components/ApprovedClientsBox"
import { LawyerPanel } from "./LawyerPanel";

function ApprovedClients() {
  return (
    <LawyerPanel title="Approved Clients" >
      <div>
      {APPROVED_CLIENTS.map((item, index) => {
          return (
            <ApprovedClientsBox
              name={item.name}
              case_type={item.case_type}
              id={item.id}
              city={item.city}
              email={item.email}
              phone_no={item.phone_no}
              status={item.status}
              case_id={item.case_id}
              description={item.description}
            />
          );
        })}
      </div>
    </LawyerPanel>
  );
}

export default ApprovedClients;
