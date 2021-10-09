import classNames from 'classnames';
import { TableInstance } from 'react-table';
import { Card } from './Card';
import { Label } from './Label';

interface Props {
    tableInstance: TableInstance<any>;
    onRowClick?: (row: any) => void;
    title?: string;
}

export function Table({ onRowClick, tableInstance, title }: Props) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        <Card title={title}>
            <div className="w-full md:hidden">
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <div
                            key={row.id}
                            {...row.getRowProps()}
                            className={classNames(
                                'hover:bg-blue-200',
                                'hover:shadow-xl',
                                'rounded',
                                'p-5',
                                'my-2',
                                'active:shadow-none',
                                'transition-all',
                                'duration-100',
                                {
                                    'cursor-pointer': !!onRowClick,
                                    'bg-indigo-200': row.index % 2,
                                },
                            )}
                            onClick={() =>
                                onRowClick && onRowClick(row.original)
                            }
                        >
                            <ul>
                                {row.cells.map((cell) => {
                                    return (
                                        <li
                                            className=""
                                            key={cell.getCellProps().key}
                                        >
                                            <Label>
                                                {cell.render('Header')}:{' '}
                                            </Label>
                                            {cell.render('Cell')}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <table
                className="w-full table-auto border-separate hidden md:table"
                style={{ borderSpacing: '0 0.5rem' }}
                {...getTableProps()}
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            {...headerGroup.getHeaderGroupProps()}
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    className="px-4 py-2 text-indigo-600"
                                    key={column.id}
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps(),
                                    )}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr
                                key={row.id}
                                {...row.getRowProps()}
                                className={classNames(
                                    'hover:bg-blue-200',
                                    'hover:shadow-xl',
                                    'active:shadow-none',
                                    'transition-all',
                                    'duration-100',
                                    {
                                        'cursor-pointer': !!onRowClick,
                                        'bg-indigo-200': row.index % 2,
                                    },
                                )}
                                onClick={() =>
                                    onRowClick && onRowClick(row.original)
                                }
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            className="m-2 py-2 px-4"
                                            key={cell.getCellProps().key}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}
