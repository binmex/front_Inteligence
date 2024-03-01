import React, { useRef } from "react";
import { useMountEffect } from "primereact/hooks";
import { Messages } from "primereact/messages";

const MessageReact = ({words}) => {
  const msgs = useRef(null);

  useMountEffect(() => {
    if (msgs.current) {
      msgs.current.clear();
      msgs.current.show([
        {
          sticky: true,
          life: 4000,
          severity: "error",
          summary: "Error",
          detail: `${words}`,
          closable: false,
        },
      ]);
    }
  });
  return (
    <div className="card">
      <Messages ref={msgs} />
    </div>
  );
};

export default MessageReact;
