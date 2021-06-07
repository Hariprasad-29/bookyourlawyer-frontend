import React from "react";
import { ClientPanel } from "./ClientPanel";
import LawyerListBox from "./../components/LawyerListBox";
import { LAWYER_LIST } from "./Constants";

function LawyerList() {

  return (
    <ClientPanel title={"Lawyers List"}>
      <div>
        {LAWYER_LIST.map((item, index) => {
          return (
            <LawyerListBox
              name={item.name}
              case_type={item.case_type}
              id={item.id}
              city={item.city}
              email={item.email}
              phone_no={item.phone_no}
              rating={item.rating}
            />
          );
        })}
      </div>
    </ClientPanel>
  );
}

export default LawyerList;
