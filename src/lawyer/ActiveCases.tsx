import React from 'react'
import { LawyerPanel } from "./LawyerPanel";
import { ACTIVE_CASES } from "./constants/ActiveCasesConstant";
import ActiveCasesBox from "../components/ActiveCasesBox"

function ActiveCases() {
    return (
        <LawyerPanel title="Approved Clients" >
        <div>
        {ACTIVE_CASES.map((item, index) => {
            return (
              <ActiveCasesBox
                client_name={item.client_name}
                description={item.description}
                case_type={item.case_type}
                id={item.id}
                city={item.city}
              />
            );
          })}
        </div>
      </LawyerPanel>
    )
}

export default ActiveCases
