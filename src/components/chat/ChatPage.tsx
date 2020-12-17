import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import ChatSidebar from './ChatSidebar';
import useScreenDimensions from '../../utils/useScreenDimensions';
import { RouterPageProps, SwitchRoutes } from '../../routes';
import ChatHeader from './ChatHeader';
import Message from './Message';
import { CgAirplane, CgAttachment } from 'react-icons/cg';
import { useParams } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectCurrentMessages } from '../../state/chats/chats.selectors';
import { selectChat } from '../../state/chats/chats.actions';

const ChatPage: React.FC<RouterPageProps> = ({ routes }) => {
  const [screenWidth] = useScreenDimensions();
  const isWideScreen = screenWidth > 680;

  const [showSidebar, setShowSidebar] = React.useState<boolean>(isWideScreen);
  const toggleSidebar = (): void => setShowSidebar((show) => !show);

  const { chatId = '' } = useParams<{ chatId?: string }>();
  const chat = useSelector(selectCurrentMessages, shallowEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (chatId != '') {
      dispatch(selectChat({ chatId: chatId }));
    }
  }, [dispatch, chatId]);

  return (
    <div data-testid="ChatPage" className="relative flex h-screen">
      {routes && <SwitchRoutes routes={routes} />}
      <CSSTransition
        in={showSidebar}
        timeout={300}
        classNames={{
          exitActive: '-translate-x-sidebar ease-out',
          enter: '-translate-x-sidebar',
          enterActive: 'translate-x-0 ease-in',
        }}
        unmountOnExit
      >
        <ChatSidebar
          id="chat-sidebar"
          hideSidebar={(): void => setShowSidebar(false)}
          className={
            (isWideScreen ? '' : 'fixed ') +
            'z-40 w-sidebar bg-white text-black shadow h-full transform transition-all duration-300'
          }
        />
      </CSSTransition>
      <div id="chat-area" className="relative flex-1 flex flex-col">
        <ChatHeader chat={chat} showSidebarToggle={true} toggleSidebar={toggleSidebar} />
        <main
          id="message-container"
          className="my-2 px-4 pt-2 pb-16 flex-1 flex flex-col-reverse overflow-auto"
        >
          <div className="w-full max-w-screen-lg mx-auto flex flex-col-reverse space-y-4 space-y-reverse">
            {chat ? (
              chat.messages.map((message) => <Message key={message.id} message={message} />)
            ) : chatId !== '' ? (
              <p>Invalid Chat Selected, No Such Chat.</p>
            ) : (
              <p>Select a conversation from Sidebar</p>
            )}
          </div>
        </main>
        <footer id="compose-message" className="absolute bg-gray-100 bottom-0 inset-x-0 p-4 pt-2">
          <div className="flex items-center space-x-2 rounded shadow-md bg-white px-2">
            <button className="p-2 rounded-full hover:bg-gray-200 text-gray-800">
              <CgAttachment className="w-4 h-4" />
            </button>
            <input
              type="text"
              className="py-2 flex-1 w-full"
              placeholder="Your Message..."
              disabled={!chat}
            />
            <button className="p-2 rounded-full hover:bg-gray-200 text-gray-800">
              <CgAirplane className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
