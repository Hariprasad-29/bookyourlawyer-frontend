import React from 'react'
import { ClientPanel } from './ClientPanel'
import { APPROVED_CLIENT_REQUESTS } from "./Constants";
import ApprovedCasesBox from "./../components/ApprovedCasesBox";

function ApprovedCase() {
    return (
        <ClientPanel title="Approved Case">
          <div>
          {
              APPROVED_CLIENT_REQUESTS.map((item, index) => {
                  return (
                      <ApprovedCasesBox
                        amount={item.amount}
                        description={item.description}
                        id={item.id}
                        name={item.name}
                        status={item.status}
                      />
                  )
              })
          }
          </div>
        </ClientPanel>

    )
}

export default ApprovedCase
