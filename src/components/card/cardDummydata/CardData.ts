import { Component } from "vue";
import PaidIcon from "../../assets/icons/vue/PaidIcon.vue";
import BonusIcon from "../../assets/icons/vue/BonusIcon.vue";
import EwalletIcon from "../../assets/icons/vue/EwalletIcon.vue";
import PendingPay from "../../assets/icons/vue/PendingPay.vue";
import IncomeIcon from "../../assets/icons/vue/IncomeIcon.vue";

type CardInfo = {
  title: string;
  amount: string;
  icon: Component;
  backgroundColor?: string;
};

export const cardInfo: CardInfo[] = [
  {
    title: "Current Cash Balance",
    amount: "GHC 10,000",
    icon: EwalletIcon,
    backgroundColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
  },
  {
    title: "Total Income",
    amount: "GHC 10,000",
    icon: IncomeIcon,
    backgroundColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    title: "Bonus Generated",
    amount: "GHC 10,000",
    icon: BonusIcon,
    backgroundColor: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    title: "Paid Amount",
    amount: "GHC 10,000",
    icon: PaidIcon,
    backgroundColor: "bg-gradient-to-r from-[#875fc0] to-sky-500",
  },
  {
    title: "Pending Amount",
    amount: "GHC 10,000",
    icon: PendingPay,
    backgroundColor: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
];
