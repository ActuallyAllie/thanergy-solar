export interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    active: boolean;
    account_manager_id: number;
    reason_for_joining: string;
    created_date: string;
}
