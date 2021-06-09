import React, { useState } from "react";
import { LawyerPanel } from "./LawyerPanel";
import ClientRequestBox from "./../components/ClientRequestBox";
import { CLIENT_REQUESTS } from "./constants/ClientRequestsConstants";


function ClientRequests() {


  return (
    <LawyerPanel title={"Client Requests"}>
      <div>
      {CLIENT_REQUESTS.map((item, index) => {
          return (
            <ClientRequestBox
              name={item.name}
              case_type={item.case_type}
              id={item.id}
              city={item.city}
              email={item.email}
              phone_no={item.phone_no}
              description={item.description}
            />
          );
        })}
      </div>
    </LawyerPanel>
  );
}

export default ClientRequests;
