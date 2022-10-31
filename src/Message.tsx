import { MessageType } from './Messages';

type MessageProps = {
  message: MessageType;
};

function Message({ message }: MessageProps) {
  return (
    <div
      className={`m-2 flex max-w-3/4 ${
        message.userId === 'left' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        key={message.id}
        className={`${
          message.userId === 'left'
            ? 'bg-blue-400 text-whitefsdaf'
            : 'bg-slate-300 text-black'
        } rounded-full py-2`}
      >
        <p className="text-sm py-0 px-4 drop-shadow-sm inline text-left ">
          {message.text}
        </p>
      </div>
    </div>
  );
}

export default Message;
