import React from 'react';
import Loader from "../Loader/Loader";
import {TableProps} from "../../types/types";

function Table({ columns,  data, isLoading }: TableProps) {
    return (

        isLoading ? <Loader/> : (<table className="table table-striped">
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>)
    );
}

export default Table;
