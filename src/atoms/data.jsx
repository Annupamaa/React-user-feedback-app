import { atom } from "recoil";

export const data = atom({
    key: "data",
    default: {
        username: "User",
        pendingAssignment: -1,
    },
});