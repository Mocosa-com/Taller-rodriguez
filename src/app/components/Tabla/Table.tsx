import { Fullscreen } from "lucide-react";

type Columna<T> = {
    header: string;
    accessor: keyof T;
};

type TableProps<T> = {
    columns: Columna<T>[];
    data: T[];
};

export default function Table<T>({columns, data} : TableProps<T>) {
    return(
        <table className="border-separate border-spacing-0 rounded-xl overflow-hidden w-full shadow shadow-xl">
            <thead className="bg-red-500 rounded">
                <tr className="text-white font-light">
                    {columns.map(col => (
                        <th key={String(col.accessor)}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                data.map((row, i) => (
                    <tr key={i} className="text-center border-table ">
                        {columns.map(col => (
                            <td key={String(col.accessor)}>{String(row[col.accessor])}</td>
                        ))}
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
}