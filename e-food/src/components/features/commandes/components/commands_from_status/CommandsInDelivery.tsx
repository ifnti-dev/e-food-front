
export default function CommandsInDelivery({ refDelivery, onDragOver, onDrop }: { refDelivery: any, onDragOver: React.DragEventHandler<any> | undefined, onDrop: React.DragEventHandler<HTMLOListElement> | undefined }) {

    return (
        <>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                <h6 className="fw-bold py-3 mb-0"> En Livraison</h6>
                <div className="completed_task border rounded">
                    <div className="dd  d-inline-block w-100 " data-plugin="nestable" >
                        <ol className="dd-list " ref={refDelivery} onDragOver={onDragOver} onDrop={onDrop} style={{ minHeight: 200 }}>

                        </ol>
                    </div>
                </div>
            </div>
        </>
    )

}