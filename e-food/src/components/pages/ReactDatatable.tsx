import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";

function ReactDataTable({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const dt = new DataTables(tableRef.current!, props );
    return () => {
      dt.destroy();
    };
  }, []);

  return <table ref={tableRef} className="table table-hover align-middle mb-0 table-striped border " style={{ width: '100%' }}></table>;
}

export default ReactDataTable;