
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function PaginationDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (product:any, index:any) => {
        return (
            <div className="">
            <li className="dd-item shadow-lg mb-3" 
                onDragOver={(e) => e.preventDefault()} >
                <div className="dd-handle ">
                    <div className="task-info d-flex align-items-center justify-content-between">

                        <div className="avatar-list avatar-list-stacked ">
                            <span className="avatar rounded-circle text-center text-capitalize">sdf</span>

                        </div>
                        <div>
                            <span >sdf</span>
                        </div>
                        <div className="task-priority">

                            <span className="badge bg-success text-end">100 <span className=" ms-1">CFA</span> </span>

                        </div>
                    </div>
                    <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                        nec scelerisque massa.</p>
                    <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">

                        </div>
                        <div className="col-sm text-end">

                            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> 1233</div>
                        </div>
                    </div>
                </div>

            </li>



        </div>
        );
    };

    const listTemplate = (items: Product) => {
        if (!items || items.length === 0) return null;

        let list = items.map((product, index) => {
            return itemTemplate(product, index);
        });

        return <div className="grid grid-nogutter">{list}</div>;
    };

    return (
        <div className="card">
        <DataView value={products} listTemplate={listTemplate} paginator rows={5} />
        </div>
    )
}
            
        