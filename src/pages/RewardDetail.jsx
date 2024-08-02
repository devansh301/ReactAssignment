import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { RewardsAtom } from "../store/atoms/RewardsAtom";
import { useState, useEffect } from "react";

import RewardCard from "../components/RewardCard";

export default function RewardDetail() {
    const { id } = useParams();
    const rewardList = useRecoilValue(RewardsAtom);
    const [reward, setReward] = useState(null);

    useEffect(() => {
        const foundReward = rewardList.find(r => r.id === parseInt(id, 10));
        setReward(foundReward);
    }, [id, rewardList]);

    return (
        <div className="container mx-auto p-4">
            {reward ? (
                <>
                    <h1 className="text-5xl font-extrabold text-center mb-6">Reward Details</h1>
                    <RewardCard reward={reward} variant="detail" />
                </>
            ) : (
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-red-600">No Reward Found</h1>
                    <p className="text-gray-600 mt-2">
                        The reward you are looking for does not exist or has been removed.
                    </p>
                </div>
            )}
        </div>
    );
}