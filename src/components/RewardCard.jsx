import PropTypes from 'prop-types';

function RewardCard({ reward, variant }) {
    const isDetailView = variant === 'detail';

    return (
        <div className={`p-4 border rounded shadow-md mb-4 ${isDetailView ? 'bg-white border-gray-200' : 'border-gray-300'}`}>
            <p className={`text-lg font-semibold ${isDetailView ? 'text-3xl' : ''}`}>{reward.brand}</p>
            <p className={`text-gray-600 ${isDetailView ? 'text-xl' : 'text-sm'}`}>Reward Points: {reward.rewardPoints}</p>
            <p className={`text-gray-500 ${isDetailView ? 'text-md' : 'text-sm'}`}>Purchased on: {reward.purchaseDate}</p>
        </div>
    );
}

RewardCard.propTypes = {
    reward: PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        rewardPoints: PropTypes.number.isRequired,
        purchaseDate: PropTypes.string.isRequired
    }).isRequired,
    variant: PropTypes.oneOf(['dashboard', 'detail'])
};

export default RewardCard;
