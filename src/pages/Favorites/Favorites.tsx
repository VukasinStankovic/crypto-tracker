import Table from "../../components/Table/Table";

function Favorites() {
    // Primer podataka za tabelu
    const tableColumns = ["Name", "Last", "Change", "Change Percent", "High", "Low"];
    const tableData = [
        ["Bitcoin", "$45,678.90", "+$123.45", "+1.23%", "$46,789.00", "$45,200.50"],
        // Dodajte ostale redove podataka ovde
    ];

    return (
        <div>
            <Table columns={tableColumns} data={tableData} isLoading={false}/>
        </div>
    );
}

export default Favorites;