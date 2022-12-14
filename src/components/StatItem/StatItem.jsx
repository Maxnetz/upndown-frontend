import { MdPendingActions } from "react-icons/md";
import { useAppContext } from "../../context/appContext";
const StatItem = () => {
    const { stats, userName, isStatsSuccess, totalActivities } =
        useAppContext();

    return (
        <div className="bg-white flex flex-col justify-around">
            <h5 className="title p-4 text-center text-xl font-bold">
                {userName}'s Total Activities
            </h5>

            <header className="flex justify-between text-3xl font-bold">
                <span className="count p-4 ml-4">
                    {isStatsSuccess && totalActivities}
                </span>
                <span className="icon p-4 mr-4">
                    <MdPendingActions />
                </span>
            </header>
        </div>
    );
};

export default StatItem;
