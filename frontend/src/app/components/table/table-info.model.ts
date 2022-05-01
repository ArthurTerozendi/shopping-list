export interface TableInfo {
    head: HeadInfo[];
    bodyRow: BodyRow[]
}
export interface HeadInfo {
    name: string;
}
export interface BodyRow {
    bodyInfo: BodyInfo[]
}
export interface BodyInfo {
    name: string;
}
export interface EventResponse {
    row: number;
    column: number;
    value: string
}
