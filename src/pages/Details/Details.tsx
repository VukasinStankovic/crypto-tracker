import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";

function Details() {

    const detailTableColumns = ["Feature", "Value"];
    const detailTableData = [
        ["Feature 1", "Value 1"],
        ["Feature 2", "Value 2"],
        // Dodajte ostale redove podataka ovde
    ];
    const handleAddToFavorites = () => {};

    return (
        <div>
            <Table columns={detailTableColumns} data={detailTableData} isLoading={false}/>
            <Button text={"Add to favorites"} handleOnClick={handleAddToFavorites}/>
            <Button text={"Remove from favorites"} remove={true} handleOnClick={handleAddToFavorites}/>
        </div>
    );
}

export default  Details;
