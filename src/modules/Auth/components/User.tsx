import { ReactNode } from 'react'
import { IUser } from '../types'

export const User = ({ user, children:_ }: { user: IUser, children?: ReactNode }) => {
	return (
		<div className='d-flex align-items-center gap-1'>
			<p className='m-0'><span>Welcome,</span> <strong>{ user.name } {user.lastName}</strong></p>
			<img src="/img/john-doe.jpg" className='rounded-circle' alt="profile" width={28} height={28} />
		</div>
	)
}
