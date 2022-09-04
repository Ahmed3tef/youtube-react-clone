import {
  MdHomeFilled,
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdOutlinedFlag,
} from 'react-icons/md';
import {
  AiOutlineFire,
  AiOutlinePlaySquare,
  AiOutlineClockCircle,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import {
  BsCollectionPlay,
  BsTrophy,
  BsExclamationSquare,
} from 'react-icons/bs';
import { RiThumbUpLine, RiHistoryLine } from 'react-icons/ri';
import { SiYoutubegaming } from 'react-icons/si';
import { HiOutlineStatusOnline } from 'react-icons/hi';

// TODO: add id

export const sidebarCategories = [
  [
    { name: 'Home', id: 1, icon: <MdHomeFilled /> },
    { name: 'Explore', id: 2, icon: <MdOutlineExplore /> },
    { name: 'Shorts', id: 3, icon: <AiOutlineFire /> },
    { name: 'Subscriptions', id: 4, icon: <BsCollectionPlay /> },
  ],
  [
    { name: 'Library', id: 5, icon: <MdOutlineVideoLibrary /> },
    { name: 'History', id: 6, icon: <RiHistoryLine /> },
    { name: 'Your videos', id: 7, icon: <AiOutlinePlaySquare /> },
    { name: 'Watch later', id: 8, icon: <AiOutlineClockCircle /> },
    { name: 'Liked videos', id: 9, icon: <RiThumbUpLine /> },
  ],
  [
    { name: 'Gaming', id: 10, icon: <SiYoutubegaming /> },
    { name: 'Live', id: 11, icon: <HiOutlineStatusOnline /> },
    { name: 'Sports', id: 12, icon: <BsTrophy /> },
  ],
  [
    { name: 'Settings', id: 13, icon: <AiOutlineSetting /> },
    { name: 'Report history', id: 14, icon: <MdOutlinedFlag /> },
    { name: 'Help', id: 15, icon: <AiOutlineQuestionCircle /> },
    { name: 'Send feedback', id: 16, icon: <BsExclamationSquare /> },
  ],
];
