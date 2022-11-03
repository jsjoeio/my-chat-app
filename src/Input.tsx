import React from "react";
import { MessageType } from "./Messages";

type InputProps = {
  onSubmit: (text: MessageType["text"]) => void;
};

export function Input({ onSubmit }: InputProps) {
  const [message, setMessage] = React.useState("");

  function handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
    const el = document.querySelector("#message-input");
    if (el) {
      (el as HTMLDivElement).innerText = "";
    }
  }

  return (
    <div className="b-0 bg-slate-200 pt-1 pb-2 border-slate-200 border-t-2">
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <textarea
          id="message-input"
          className="bg-white text-black py-1 px-2 ml-2"
          placeholder="Message"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="p-1 px-4 text-sm bg-white text-stone-500 font-bold mx-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
