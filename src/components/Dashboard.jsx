import { useRecoilValue } from "recoil";
import { RewardsAtom, TotalRewardSelector } from "../store/atoms/RewardsAtom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const rewardsList = useRecoilValue(RewardsAtom);
    const totalRewards = useRecoilValue(TotalRewardSelector);
    const [rewards, setRewards] = useState(rewardsList);
    const [searchQuery, setSearchQuery] = useState("");

    const sortByPoints = () => {
        const sortedRewards = [...rewards].sort((a, b) => a.rewardPoints - b.rewardPoints);
        setRewards(sortedRewards);
    };

    const sortByDate = () => {
        const sortedRewards = [...rewards].sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
        setRewards(sortedRewards);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredRewards = rewards.filter(rew =>
        rew.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-extrabold text-center mb-6">Dashboard</h1>
            <h2 className="text-3xl text-gray-700 mb-4">Total Rewards: <span className="font-semibold">Rs.{totalRewards}</span></h2>
            <div className="flex items-center mb-4 space-x-4">
                <input
                    type="text"
                    placeholder="Search by brand"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded w-full"
                />
                <button className="px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300" onClick={sortByPoints}>
                    Sort by Points
                </button>
                <button className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300" onClick={sortByDate}>
                    Sort by Date
                </button>
            </div>
            <ul className="mt-6">
                {filteredRewards.map((rew) => (
                    <Link to={`rewards/${rew.id}`} key={rew.id}>
                        <li className="border border-gray-300 rounded p-4 shadow-md mb-4">
                            <p className="text-lg font-semibold">{rew.brand}</p>
                            <p className="text-gray-600">Reward Points: {rew.rewardPoints}</p>
                            <p className="text-gray-500 text-sm">Purchased on: {rew.purchaseDate}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
