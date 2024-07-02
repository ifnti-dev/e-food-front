
function Spinner({value}: {value: boolean} ) {

    if (value) {
        return (
            <>

                <div className="text-center spinner">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden" >Loading...</span>
                    </div>
                </div>
            </>)
    } else {

    }


}

export default Spinner


