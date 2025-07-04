import Log1 from "../../../../assets/svg/log1.svg";
import Log2 from "../../../../assets/svg/log2.svg";
import Log3 from "../../../../assets/svg/log3.svg";
import Log4 from "../../../../assets/svg/log4.svg";
import Log5 from "../../../../assets/svg/log5.svg";
import Log6 from "../../../../assets/svg/log6.svg";

export interface NavType {
  id: string;
  text: string;
  icon: string;
  url: string;
}

export const NavItem: NavType[] = [
  {
    id: "1",
    text: "Product retail price",
    icon: Log1.src,
    url: "/dash",
  },
  {
    id: "2",
    text: "Flight Widget",
    icon: Log2.src,
    url: "/dash/flight",
  },
  {
    id: "3",
    text: "Depot widget",
    icon: Log3.src,
    url: "/dash/depot",
  },
  {
    id: "4",
    text: "News widget",
    icon: Log4.src,
    url: "/dash/news",
  },
  {
    id: "5",
    text: "Report widget",
    icon: Log5.src,
    url: "/dash/report",
  },
  {
    id: "6",
    text: "Exchange rate",
    icon: Log6.src,
    url: "/dash/exchange",
  },
];
