import { useEffect, useState } from "react";
import { MessageType, Messages } from "./Messages";
import { Input } from "./Input";
import Header from "./Header";

const MESSAGE_CONTAINER = "msg-container";

function buildMessage(
  userId: MessageType["userId"],
  id: MessageType["id"],
  text: MessageType["text"]
): MessageType {
  return {
    id,
    text,
    userId,
    timestamp: Date.now(),
  };
}

function App() {
  const [currentUserId, setCurrentUserId] = useState<"left" | "right">("right");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const messageContainer = document.querySelector(`#${MESSAGE_CONTAINER}`);

    if (messageContainer) {
      // Source: https://stackoverflow.com/a/40903808
      messageContainer.scrollTop =
        messageContainer.scrollHeight - messageContainer.clientHeight;
    }
  }, [messages]);

  return (
    <div className="App font-sans bg-white">
      <Header isInputFocused={isInputFocused} />
      <div className="h-screen">
        <Messages
          id={MESSAGE_CONTAINER}
          messages={messages}
          isInputFocused={isInputFocused}
        />
        <Input
          onInputBlurredCallback={() => setIsInputFocused(false)}
          onInputFocusedCallback={() => setIsInputFocused(true)}
          onSubmit={(text: MessageType["text"]) => {
            const defaultId = "123";

            const msg = buildMessage(currentUserId, defaultId, text);
            setMessages([...messages, msg]);

            if (currentUserId === "left") {
              setCurrentUserId("right");
            } else {
              setCurrentUserId("left");
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
