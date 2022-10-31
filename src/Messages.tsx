import Message from './Message';

export type MessageType = {
  id: string;
  text: string;
  timestamp: number;
  userId: 'left' | 'right';
};

type MessageProps = {
  messages: MessageType[];
  id: string;
};

export function Messages({ messages, id }: MessageProps) {
  return (
    <div
      id={id}
      style={{ height: '600px', maxHeight: '100vh' }}
      className="overflow-y-scroll"
    >
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
