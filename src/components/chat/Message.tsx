import { format } from 'date-fns';
import * as React from 'react';
import { CgCheck } from 'react-icons/cg';
import { IMessage } from '../../types/chat.type';

const Message: React.FC<MessageProps> = ({ message, className = '', ...props }) => {
  const classNames = {
    wrapper: { in: 'justify-end', out: 'justify-start' },
    bubble: {
      in: 'bg-blue-500 text-white rounded-br',
      out: 'rounded-bl pb-6',
    },
  };

  const wrapperClassName = message.inbound ? classNames.wrapper.in : classNames.wrapper.out;
  const bubbleClassName = message.inbound ? classNames.bubble.in : classNames.bubble.out;

  return (
    <div {...props} className={`flex ${wrapperClassName} ${className}`}>
      <div className={`relative px-4 py-2 bg-white rounded-xl shadow ${bubbleClassName}`}>
        <p>{message.content}</p>
        <div className="absolute inset-x-0 bottom-0 px-4 text-left">
          {!message.inbound && message.sentTime && (
            <span className="text-xs inline-flex items-center text-gray-400">
              <CgCheck className="flex-none w-4 h-4" />
              <span>{format(message.sentTime, 'hh:mm aaaa')}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
  message: IMessage;
};
export default Message;
