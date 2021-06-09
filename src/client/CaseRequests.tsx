import React from 'react'
import { ClientPanel } from "./ClientPanel"
import CaseRequestsBox from '../components/CaseRequestsBox'
import { CLIENT_REQUESTS } from "./Constants"

function CaseRequests() {
    return (
        <ClientPanel title="Case Requests">
            <div>
                {
                    CLIENT_REQUESTS.map((item, index) => {
                        return (
                            <CaseRequestsBox 
                                 amount={item.amount}
                                 case_type={item.case_type}
                                 description={item.description}
                                 id={item.id}
                                 name={item.name}
                            />
                        )
                    })
                }    
            </div>
        </ClientPanel>

    )
}

export default CaseRequests
