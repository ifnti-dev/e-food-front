import { PropsCommandType } from "../../types/interfaces";
import CommandList from "../orders/CommandList";


export default function CommandsInProgress({ handleDragStart, togle, data, status }: { status: string, handleDragStart: any, togle: any, data: PropsCommandType[] }) {

    return (
        <>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4 h-100">
                <span
                    style={{
                        fontWeight: 500,
                        lineHeight: "normal",
                        overflow: "hidden",
                        paddingRight: 6,
                        marginBottom:10,
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
                            background: "rgb(40, 69, 108)",
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
                                        backgroundColor: "rgb(46, 124, 209)",
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
                                En cours
                            </span>
                        </div>
                    </div>
                </span>

                <div className="progress_task border rounded border-success-subtle height-status mt-2">
                    <div className="dd" data-plugin="nestable">
                        <ol className="dd-list" >
                            <CommandList handleDragStart={handleDragStart} data={data} togle={togle} status={status} />
                        </ol>
                    </div>
                </div>
            </div>







        </>
    )
}