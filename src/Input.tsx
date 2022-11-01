import React from 'react';
import { MessageType } from './Messages';

type InputProps = {
  onSubmit: (text: MessageType['text']) => void;
};

export function Input({ onSubmit }: InputProps) {
  const [message, setMessage] = React.useState('');

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    console.log('message is: ', message);
    console.log('other is ', e.currentTarget.textContent);
    onSubmit(message);
    setMessage('');
    const el = document.querySelector('#message-input');
    if (el) {
      (el as HTMLDivElement).innerText = '';
    }
  }

  return (
    <div className="sticky b-0 bg-slate-200 pt-1 pb-2 border-slate-200 border-t-2">
      <form className="flex justify-between w-full" onSubmit={handleSubmit}>
        <div
          id="message-input"
          contentEditable="true"
          className="w-10/12 text-left bg-white px-2 py-1 text-sm text-black w-64 mx-2"
          placeholder="Message"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('yolo');
              handleSubmit(e);
            }
          }}
          onInput={(e) => {
            const text = e.currentTarget.textContent;
            if (text) {
              setMessage(text);
            }
          }}
        />
        <button
          type="submit"
          className="w-2/12 p-1 px-4 text-sm bg-white text-stone-500 font-bold mx-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
