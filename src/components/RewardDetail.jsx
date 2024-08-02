import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { RewardsAtom } from "../store/atoms/RewardsAtom";

export default function RewardDetail() {
    const { id } = useParams();
    const rewardList = useRecoilValue(RewardsAtom);
    // fix type coercion
    const reward = rewardList.find(r => r.id == id);
    // should have been a part of side effect. (works in case of static page)


    /**
     * Ideally should have a single return so that data rendering can be done at one place
     * No data comp can be seperated out as it can also be used in case of app expansion in diff places
     */
    if (!reward) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-5xl font-bold text-red-600">No Reward Found</h1>
                <p className="text-gray-600 mt-2">The reward you are looking for does not exist or has been removed.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-extrabold text-center mb-6">Reward Details</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-semibold mb-4">{reward.brand}</h2>
                <p className="text-xl text-gray-700 mb-4">Reward Points: <span className="font-semibold">Rs. {reward.rewardPoints}</span></p>
                <p className="text-md text-gray-500">Purchased on: {reward.purchaseDate}</p>
            </div>
        </div>
    );
}
