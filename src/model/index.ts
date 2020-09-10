export interface IUserType {
    id: string;
    name: string;
    job: string;
}

export interface IUserContext {
    users?: IUserType[];
    onHandleDeleteUser?: (id: string) => void;
    onHandleAddUser?: (user: IUserType) => void;
}