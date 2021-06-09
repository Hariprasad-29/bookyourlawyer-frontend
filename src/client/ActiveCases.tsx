import React from 'react'
import { ACTIVE_CASES } from "./Constants";
import ActiveCasesBox from "./../components/ActiveCasesBox";

interface Props {}

function ActiveCases(props: Props) {
    const {} = props

    return (
        <>
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
        </>
    )
}

export default ActiveCases
