import React, { useRef } from "react";
import { MessageType } from "./Messages";

type InputProps = {
  onSubmit: (text: MessageType["text"]) => void;
};

export function Input({ onSubmit }: InputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [message, setMessage] = React.useState("");

  function handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    e.preventDefault();
    onSubmit(message);
    setMessage("");
    if (textareaRef.current) {
      textareaRef.current.value = "";
      textareaRef.current.blur();
    }

    buttonRef.current?.blur();
    e.currentTarget.blur();
  }

  return (
    <div className="w-full b-0 bg-slate-200 pt-1 pb-2 border-slate-200 border-t-2">
      <form className="flex" onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          id="message-input"
          className="bg-white text-black py-1 px-2 ml-2 grow"
          placeholder="Message"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          ref={buttonRef}
          type="submit"
          className="py-1 px-4 text bg-white text-stone-500 font-bold mx-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
