import React, { Component } from 'react';
import ProductTableRow from './ProductTableRow';

class ProductsTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table className="table mt-3">
                <thead>
                    <tr className="d-flex">
                        <th className="p-2 text-left col-lg-3">Name</th>
                        <th className="p-2 col-lg-2">Brand</th>
                        <th className="p-2 col-lg-2">Category</th>
                        <th className="p-2 col-lg-2">Rating</th>
                        <th className="p-2 col-lg-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <ProductTableRow />
                </tbody>
            </table>

        );
    }
}

export default ProductsTable;