import React from 'react';
import { LawyerPanel } from "./LawyerPanel";
import CompletedCasesBox from "../components/CompletedCasesBox";
import { COMPLETED_CASES } from "../lawyer/constants/CompletedCasesBox"

function CompletedCases() {
    return (
        <LawyerPanel title="Approved Clients" >
        <div>
        {COMPLETED_CASES.map((item, index) => {
            return (
              <CompletedCasesBox
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

export default CompletedCases