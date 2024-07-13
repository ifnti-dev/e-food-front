import { PropsCommandType } from "../../types/interfaces";
import CommandList from "../orders/CommandList";


export default function CommandsInProcessing({ refTraitement, onDragOver, onDrop, data, togle, handleDragStart, status }: { status: string, refTraitement: any, onDragOver: any, onDrop: any, data: PropsCommandType[], togle: any, handleDragStart: any }) {

    return (
        <>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                <span
                    style={{
                        fontWeight: 500,
                        lineHeight: "normal",
                        overflow: "hidden",
                        paddingRight: 6
                    }}
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            flexShrink: 1,
                            minWidth: 0,
                            maxWidth: "100%",
                            height: 20,
                            borderRadius: 10,
                            paddingLeft: 7,
                            paddingRight: 9,
                            fontSize: 14,
                            lineHeight: "120%",
                            color: "rgba(255, 255, 255, 0.804)",
                            background: "#e29a7fc4",
                            margin: 0
                        }}
                    >
                        <div
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "inline-flex",
                                alignItems: "center",
                                height: 20,
                                lineHeight: 20
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div
                                    style={{
                                        marginRight: 5,
                                        borderRadius: 99,
                                        height: 8,
                                        width: 8,
                                        backgroundColor: "#F19828",
                                        display: "inline-flex",
                                        flexShrink: 0
                                    }}
                                />
                            </div>
                            <span
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}
                            >
                                En Prépation
                            </span>
                        </div>
                    </div>
                </span>
                <div className="review_task border rounded height-status mt-2">
                    <div className="dd  d-inline-block w-100 " data-plugin="nestable" >
                        <ol className="dd-list " ref={refTraitement} onDragOver={onDragOver} onDrop={onDrop} style={{ minHeight: 200 }}>

                            <CommandList handleDragStart={handleDragStart} data={data} togle={togle} status={status} />

                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}