import { Component } from "vue";
import PaidIcon from "../../assets/icons/vue/PaidIcon.vue";
import BonusGenerated from "../../assets/icons/vue/BonusGenerated.vue";
import EwalletIcon from "../../assets/icons/vue/EwalletIcon.vue";
import PendingPay from "../../assets/icons/vue/PendingPay.vue";
import IncomeIcon from "../../assets/icons/vue/IncomeIcon.vue";

type TipType = {
  title: string;
  text: string;
  icon: Component;
  backgroundColor?: string;
};
export const TipData: TipType[] = [
  {
    title: "Current Cash Balance",
    text: "Ensure you have at least 3 months’ worth of expenses saved for emergencies.",
    icon: EwalletIcon,
    backgroundColor: "bg-[#875fc0]",
  },
  {
    title: "Total Income",
    text: "Evaluate your income streams and look for opportunities to increase them.",
    icon: IncomeIcon,
    backgroundColor: "bg-[#ec4885]",
  },
  {
    title: "Bonus Generated",
    text: "Use your bonus wisely: save or invest for long-term financial security.",
    icon: BonusGenerated,
    backgroundColor: "bg-[#46f34b]",
  },
  {
    title: "Paid Amount",
    text: "Track paid amounts closely to stay within your budget and avoid over-spending.",
    icon: PaidIcon,
    backgroundColor: "bg-[#46c5f4]",
  },
  {
    title: "Pending Amount",
    text: "Pay pending bills on time to maintain a healthy credit score.",
    icon: PendingPay,
    backgroundColor: "bg-[#ffb82c]",
  },
];
