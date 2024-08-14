import { ReactNode } from "react";

export interface IUser {
	uuid?: string,
	name?: string
	lastName?: string
	children?: ReactNode;
}