import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import ChatSidebar from './ChatSidebar';
import ChatArea from './ChatArea';
import useScreenDimensions from '../../utils/useScreenDimensions';
import { RouteInfo, SwitchRoutes } from '../../routes';

const ChatPage: React.FC<{ routes?: RouteInfo[] }> = ({ routes }) => {
  const [screenWidth] = useScreenDimensions();
  const isWideScreen = screenWidth > 680;
  const [showSidebar, setShowSidebar] = React.useState<boolean>(isWideScreen);
  const toggleSidebar = (): void => setShowSidebar((show) => !show);

  return (
    <div className="relative flex h-screen">
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
          className="fixed w-sidebar bg-white text-black shadow h-full transform transition-all duration-300"
        />
      </CSSTransition>
      <ChatArea
        id="chat-area"
        isShowingSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
        className="flex-1 flex flex-col"
      />
      {routes && <SwitchRoutes routes={routes} />}
    </div>
  );
};

export default ChatPage;
