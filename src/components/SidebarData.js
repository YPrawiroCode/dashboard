import React from "react";
import * as MdIcons from "react-icons/md"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdIcons.MdSpaceDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Visitor',
    path: '/visitor',
    icon: <AiIcons.AiFillDatabase />,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Mobil',
        path: '/visitor/mobil',
        icon: <AiIcons.AiFillCar />
      },
      {
        title: 'Photobooth',
        path: '/visitor/photobooth',
        icon: <FaIcons.FaPersonBooth />
      },
      {
        title: 'Games',
        path: '/visitor/games',
        icon: <FaIcons.FaGamepad />
      }
    ]
  },
]