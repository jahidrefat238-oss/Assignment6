const PlanTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mt-6 flex items-center justify-between">

            {/* Tabs */}
            <div className="tabs tabs-lift">

                <input
                    type="radio"
                    name="my_tabs"
                    className="tab"
                    aria-label="Today's Plan"
                    defaultChecked
                    onChange={() => setActiveTab("today")}
                />

                <div className="tab-content border-[#24262c] bg-[#15161b] p-4">
                </div>


                <input
                    type="radio"
                    name="my_tabs"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}
                />

                <div className="tab-content border-[#24262c] bg-[#15161b] p-4">
                </div>

            </div>


            {/* Sort */}
            <div className="flex items-center gap-2">

                <span className="text-[10px] text-gray-500">
                    Sort By
                </span>

                <select className="rounded-lg border border-[#30333b] bg-[#15161b] px-3 py-2 text-[10px] text-gray-300 outline-none">
                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>

            </div>

        </div>
    );
};

export default PlanTabs;