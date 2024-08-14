import { useState } from "react"
import { IUser } from "../../types/User";
import { User } from "./User";
import { v4 as uuidv4 } from 'uuid';
import Spinner from "../Spinner";

export const Auth = () => {

	const [user, setUser] = useState<IUser>();
	const [loading, setLoading] = useState(false);

	const login = async () => {
		setLoading(true)
		return new Promise((res) => {
			setTimeout(()=> {
				res(
					setUser({
						uuid: uuidv4(),
						name: 'John',
						lastName: 'Doe'
					})
				)
			}, 300)
		})
		.then(() => {
			setLoading(false)
		})
	}

	if(user == null){
		return (
			<div className="d-flex align-items-center gap-3">
				<span>You are not log in yet</span>
				<button 
					className="btn btn-outline-light btn-sm text-uppercase px-3"
					onClick={login}
				>
					Log in { loading && <Spinner /> }
				</button>
			</div>
		)
	}

	return (
		<User 
		 user={user!}
		>
		</User>
	)
}
