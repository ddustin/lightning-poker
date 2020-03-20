import React, { useContext, useState } from "react";
import dispatch from "../dispatch";
import { TableContext } from "./index";

function LeaveTable({ position }) {
  const {
    me: { id: playerId },
    tableId
  } = useContext(TableContext);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="leave-table">
      <button
        className="pill"
        disabled={disabled}
        onClick={async () => {
          try {
            setDisabled(true);
            await dispatch(
              {
                tableId,
                playerId
              },
              "leave"
            );
          } catch (e) {
            console.log(e);
          }
        }}
      >
        LEAVE
      </button>
    </div>
  );
}

export default LeaveTable;
