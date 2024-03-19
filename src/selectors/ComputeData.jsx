import { selector } from "recoil";
import { data } from "../atoms/data";

export const ComputeData = selector({
    key: "ComputeData",
    get: ({ get }) => {
        let value = get(data);
        if (value.pendingAssignment <= -1) {
        return "Fill details to get feedback";
        } else if (value.pendingAssignment == 0) {
        return " you are brilliant";
        } else if (value.pendingAssignment == 1) {
        return "come on you can do it";
        } else if (value.pendingAssignment == 2) {
        return "need improvement";
        } else if (value.pendingAssignment == 3) {
        return "need revision";
        } else if (value.pendingAssignment == 4) {
        return " no internship";
        } else if (value.pendingAssignment == 5) {
        return "you have failed";
        }else {
        return "write the number lower than 6 ";
    }
    },
});