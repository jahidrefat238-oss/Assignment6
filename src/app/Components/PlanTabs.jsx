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

                <input
                    type="radio"
                    name="my_tabs"
                    className="tab"
                    aria-label="Saved"
                    onChange={() => setActiveTab("saved")}
                />

            </div>

        </div>
    );
};

export default PlanTabs;