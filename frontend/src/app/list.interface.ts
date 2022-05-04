export interface List {
    title: string;
    items: TableInfo;
    id?: number;
}
export interface TableInfo {
    head: HeadInfo[];
    body: BodyRow[]
}
export interface HeadInfo {
    name: string;
}
export interface BodyRow {
    column: BodyInfo[]
}
export interface BodyInfo {
    name: string;
}
export interface EventResponse {
    row: number;
    column: number;
    value: string
}
