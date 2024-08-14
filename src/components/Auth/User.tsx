import { ReactNode } from 'react'
import { IUser } from '../../types/User'

export const User = ({ user, children:_ }: { user: IUser, children?: ReactNode }) => {
	return (
		<div className='d-flex align-items-center'>
			<p className='m-0'><span>Welcome,</span> <strong>{ user.name } {user.lastName}</strong></p>
		</div>
	)
}
