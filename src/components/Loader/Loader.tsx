function Loader() {
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-column gap-3">
                <div className="spinner-border align-self-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <span>Loading...</span>
            </div>
        </div>
    );
}

export default  Loader;