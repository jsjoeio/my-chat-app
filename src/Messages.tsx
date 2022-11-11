import React from "react";

export type MessageType = {
  id: string;
  text: string;
  timestamp: number;
  userId: "left" | "right";
};

// hello world

type MessagesProps = {
  messages: MessageType[];
  id: string;
  isInputFocused: boolean;
};

type MessageProps = {
  message: MessageType;
};

function Message({ message }: MessageProps) {
  return (
    <div
      className={`mx-2 my-4 flex max-w-3/4 ${
        message.userId === "left" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        style={{
          maxWidth: "75%",
        }}
        key={message.id}
        className={`${
          message.userId === "left"
            ? "bg-blue-400 text-whitefsdaf"
            : "bg-slate-300 text-black"
        } rounded-full py-2 px-4 text-left`}
      >
        <p className="text-sm py-0 drop-shadow-sm inline text-left">
          {message.text}
        </p>
      </div>
    </div>
  );
}

// need to calculate

function calculatePaddingTopHeight(messagesCount: number): number {
  const MESSAGE_HEIGHT = 4;
  const calculated = 340 - messagesCount * MESSAGE_HEIGHT;
  return calculated > 0 ? calculated : 0;
}

export function Messages({ messages, id, isInputFocused }: MessagesProps) {
  return (
    <div
      id={id}
      style={{
        height: "95vh",
        paddingTop: isInputFocused
          ? `${calculatePaddingTopHeight(messages.length)}px`
          : "80px",
      }}
      className="overflow-y-scroll z-0 relative pt-20"
    >
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
