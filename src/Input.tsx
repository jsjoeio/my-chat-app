import React, { useRef } from "react";
import { MessageType } from "./Messages";

type InputProps = {
  onSubmit: (text: MessageType["text"]) => void;
  onInputBlurredCallback: () => void;
  onInputFocusedCallback: () => void;
};

export function Input({
  onSubmit,
  onInputFocusedCallback,
  onInputBlurredCallback,
}: InputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [message, setMessage] = React.useState("");
  const [bottomPos, setBottomPos] = React.useState("0");

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
      onInputBlurredCallback();
    }

    e.currentTarget.blur();
  }

  return (
    <div
      className="w-full bg-slate-200 pt-1 pb-2 border-slate-200 border-t-2"
      style={{
        position: "absolute",
        bottom: bottomPos,
      }}
    >
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
          onBlur={() => {
            onInputBlurredCallback();
          }}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => {
            setBottomPos("-40px");
            onInputFocusedCallback();
          }}
        />
        <button
          ref={buttonRef}
          type="submit"
          className="py-1 px-4 text bg-white text-stone-500 font-bold mx-2"
          onClick={(e) => e.currentTarget.blur()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
