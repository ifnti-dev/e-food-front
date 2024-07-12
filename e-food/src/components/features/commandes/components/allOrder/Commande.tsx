
import DataTables from "datatables.net-dt";
import { useEffect, useRef } from "react";
import { columnDefs, columns, language, lengthMenu } from "./constant";
import instance from "../../../../utils/axios";
import DateFilterForm from "../../../../partials/DateFilterForm";
const url: string = "api/client/order/";

export default function AllCommands() {

    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const table = new DataTables(tableRef.current!, {
            paging: true,
            serverSide: true,
            ajax: async (data: any, callBack) => {

                try {

                    const response: any = await instance.get(`${url}`, {
                        params: {
                            page: data.start / data.length,
                            size: data.length,
                            id: "2"
                        }
                    });

                    callBack({
                        draw: data.draw,
                        recordsTotal: response.data.totalElements,
                        recordsFiltered: response.data.totalElements,
                        data: response.data.content

                    });

                } catch (error) {
                    console.log(error);

                }

            },
            language: language,
            columnDefs: columnDefs,
            columns: columns,
            lengthMenu: lengthMenu,
            pageLength: 5,


        });

        return () => {
            table.destroy();
        };

    }, []);

    return (
        <div className="">
                       <DateFilterForm/>

            <table ref={tableRef} className="table table-hover align-middle mb-0 table-striped border " style={{ width: '100%' }}>

            </table>

        </div>


    );



}

