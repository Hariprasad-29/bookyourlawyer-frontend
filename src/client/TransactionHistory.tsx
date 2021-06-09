import React from 'react'
import { ClientPanel } from './ClientPanel';
import { TRANSACTION_HISTORY } from "./Constants"
import TransactionHistoryBox from "./../components/TransactionHistoryBox";

function TransactionHistory() {
    return (
        <ClientPanel title="Transaction History">
            <div>
                {
                    TRANSACTION_HISTORY.map((item, index) => {
                        return(
                            <TransactionHistoryBox 
                                amount={item.amount}
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

export default TransactionHistory