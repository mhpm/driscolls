import { FaUsers, FaNewspaper, FaCode, FaHashtag } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '@/constants/routes';
import { IconType } from 'react-icons/lib';
import { useAuth } from '@clerk/clerk-react'; // Replace with your auth library if different

export interface MenuItem {
  title: string;
  icon?: IconType;
  route?: string;
  subItems?: MenuItem[];
}

export const getMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  const { isSignedIn } = useAuth(); // Replace with your authentication logic

  const menuItems: MenuItem[] = [
    {
      title: t(ROUTES.USERS),
      icon: FaUsers,
      route: isSignedIn ? ROUTES.USERS : undefined, // Only show if signed in
    },
    {
      title: t(ROUTES.NEWS),
      icon: FaNewspaper,
      route: isSignedIn ? ROUTES.NEWS : undefined, // Only show if signed in
    },
    {
      title: ROUTES.CHALLENGES,
      icon: FaCode,
      subItems: [
        {
          title: 'Tic Tac Toe',
          route: 'challenges/tictactoe',
          icon: FaHashtag,
        },
        {
          title: 'Local Storage',
          route: 'challenges/localstorage',
        },
        {
          title: 'Accordion',
          route: 'challenges/accordion',
        },
        {
          title: 'Habit Chart',
          route: 'challenges/habitchart',
        },
        {
          title: 'Hooks',
          route: 'challenges/hooks',
        },
      ],
    },
  ];

  // Filter out undefined routes to avoid adding inaccessible menu items
  return menuItems.filter((item) => item.route || item.subItems);
};
