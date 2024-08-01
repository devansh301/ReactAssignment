import { atom, selector } from "recoil";

export const RewardsAtom = atom({
    key: 'rewardListAtom',
    default: selector({
        key: 'rewardListSelector',
        get: async() => {
            const res = await fetch("https://mocki.io/v1/68f88502-a805-4d24-a407-ee2a232a5c60");
            const json = await res.json();
            return json;
        }
    })
})

export const TotalRewardSelector = selector({
    key: 'totalRewardSelector',
    get: ({get}) => {
        const rewards = get(RewardsAtom);
        let tot = 0;
        for (let i = 0; i < rewards.length; i++) {
          tot += rewards[i].rewardPoints;
        }
        return tot;
    }
})