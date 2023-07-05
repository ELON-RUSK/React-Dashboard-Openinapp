// Sidebar imports
// import {
//   UilEstate,
//   UilClipboardAlt,
//   UilUsersAlt,
//   UilPackage,
//   UilChart,
//   UilSignOutAlt,
// } from "@iconscout/react-unicons";

import {ReactComponent as Dash1} from '../assets/dashboard_chart_icon.svg';
import {ReactComponent as Dash2} from '../assets/dashboard_transaction_icon.svg';
import {ReactComponent as Dash3} from '../assets/dashboard_schedule_icon.svg';
import {ReactComponent as Dash4} from '../assets/dashboard_user_icon.svg';
import {ReactComponent as Dash5} from '../assets/dashboard_setting_icon.svg';
import {ReactComponent as Dash6} from '../assets/total_transactions_icon.svg';
import {ReactComponent as Dash7} from '../assets/price_tag.svg';
import {ReactComponent as Dash8} from '../assets/Lke.svg';
import {ReactComponent as Dash9} from '../assets/people.svg';



// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: Dash1,
    heading: "Dashboard",
  },
  {
    icon: Dash2,
    heading: "Transactions",
  },
  {
    icon: Dash3,
    heading: "Schedules ",
  },
  {
    icon: Dash4,
    heading: 'Users'
  },
  {
    icon: Dash5,
    heading: 'Settings'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Revenues",
    color: {
      backGround: "#DDEFE0",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: Dash7,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Transactions",
    color: {
      backGround: "#F4ECDD",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: Dash6,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Total Likes",
    color: {
      backGround:
        "#EFDADA",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: Dash8,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Total Users",
    color: {
      backGround:
        "#DEE0EF",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: Dash9,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  }
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
