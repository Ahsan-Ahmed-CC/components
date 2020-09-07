export interface IColumnHeading {
    label: string;
    indexKey: IColumnHeading['label'] | number;
    sortable: boolean;
    filterable: boolean;
}
