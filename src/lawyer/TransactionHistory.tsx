import React from "react";
import { LawyerPanel } from "./LawyerPanel";
import { TRANSACTION_HISTORY } from "./../client/Constants";
import TransactionHistoryBox from "./../components/TransactionHistoryBox";


function TransactionHistory() {
  return (
    <LawyerPanel title={"Transaction History"} >
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
    </LawyerPanel>
  );
}

export default TransactionHistory;
