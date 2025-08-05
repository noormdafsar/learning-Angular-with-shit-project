export interface IRole {
    roleId: number,
    role: string
}

export interface IDesignation {
    designationId: number,
    designationName: string
}

export interface IAPIResponseModel {
    message: string,
    result: boolean,
    data: any,
}