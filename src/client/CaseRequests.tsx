import React from 'react'
import { ClientPanel } from "./ClientPanel"
import CaseRequestsBox from '../components/CaseRequestsBox'

function CaseRequests() {
    return (
        <ClientPanel title="Case Requests">
            <CaseRequestsBox />
        </ClientPanel>

    )
}

export default CaseRequests
