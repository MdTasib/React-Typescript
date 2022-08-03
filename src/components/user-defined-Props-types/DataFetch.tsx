type DataFetchProps = {
    status: "loading" | "error" | "success"
}

function DataFetch({status}: DataFetchProps) {
    if(status === 'loading'){
        return <h3>Loading....</h3>
    }else if(status === "error"){
        return <h3>Error: can't fetched data</h3>
    }

    return (
        <div>
            <h3>Data fetched successfully</h3>
        </div>
    );
}

export default DataFetch;