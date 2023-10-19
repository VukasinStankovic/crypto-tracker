export interface ButtonProps {
    text: string;
    remove?: boolean;
    handleOnClick: () => void;
}

export interface TableProps {
    columns: string[]
    data: string[][]
    isLoading: boolean
}

export interface NavbarProps {
    isLoggedIn: boolean;
    handleOnLogin: () => void;
}