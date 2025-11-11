import { BsTruck } from "react-icons/bs";
import { PiFactory, PiPlanet } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import {
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber1Filled,
} from "react-icons/tb";
export const List = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "it is a long established fact that a reader.",
    icon: <PiPlanet />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacture",
    para: "it is a long established fact that a reader.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quailty Control",
    para: "it is a long established fact that a reader.",
    icon: <SlBadge />,
  },

  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: " Logistics",
    para: "it is a long established fact that a reader.",
    icon: <BsTruck />,
  },
];
