import { useRecoilValue } from "recoil";
import { RewardsAtom, TotalRewardSelector } from "../store/atoms/RewardsAtom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RewardCard from "../components/RewardCard";

export default function Dashboard() {
    const rewardsList = useRecoilValue(RewardsAtom);
    const totalRewards = useRecoilValue(TotalRewardSelector);
    const [rewards, setRewards] = useState(rewardsList);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState("");

    useEffect(() => {
        let filteredRewards = rewardsList.filter(rew =>
            rew.brand.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortType === "ascPoint") {
            filteredRewards.sort((a, b) => a.rewardPoints - b.rewardPoints);
        } else if (sortType === "decPoint") {
            filteredRewards.sort((a, b) => b.rewardPoints - a.rewardPoints);
        } else if (sortType === "ascDate") {
            filteredRewards.sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate));
        } else if (sortType === "decDate") {
            filteredRewards.sort((a, b) => new Date(b.purchaseDate) - new Date(a.purchaseDate));
        }
        setRewards(filteredRewards);
    }, [rewardsList, searchQuery, sortType]);

    const handleSort = (tp) => {
        setSortType(tp);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-extrabold text-center mb-6">Dashboard</h1>
            <h2 className="text-3xl text-gray-700 mb-4">
                Total Rewards: <span className="font-semibold">Rs.{totalRewards}</span>
            </h2>
            <div className="flex items-center mb-4 space-x-4">
                <input
                    type="text"
                    placeholder="Search by brand"
                    value={searchQuery}
                    onChange={(e) => {
                        setSortType("");
                        setSearchQuery(e.target.value);
                    }}
                    className="p-2 border border-gray-300 rounded w-full"
                />
                <button
                    className="px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300"
                    onClick={() => handleSort("ascPoint")}
                >
                    Sort by Points ↑
                </button>
                <button
                    className="px-4 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-300"
                    onClick={() => handleSort("decPoint")}
                >
                    Sort by Points ↓
                </button>
                <button
                    className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
                    onClick={() => handleSort("ascDate")}
                >
                    Sort by Date ↑
                </button>
                <button
                    className="px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
                    onClick={() => handleSort("decDate")}
                >
                    Sort by Date ↓
                </button>
            </div>
            <ul className="mt-6">
                {rewards.map((reward) => (
                    <Link to={`rewards/${reward.id}`} key={reward.id}>
                        <RewardCard reward={reward} variant="dashboard" />
                    </Link>
                ))}
            </ul>
        </div>
    );
}