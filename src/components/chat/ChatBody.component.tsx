import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IChatBody, message } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';

const ChatBody: FC<IChatBody> = ({
	messages,
	messageRef,
	user,
}): JSX.Element => {
	const navigate = useNavigate();

	const handleLeaveChat = () => {
		navigate('/');
	};

	console.log(messages)

	return (
		<>
			<header className={styles['body__header']}>
				<p>Connected on chat as {user?.name}</p>
				<button
					className={styles['body__header_leave']}
					onClick={handleLeaveChat}
				>
					LEAVE CHAT
				</button>
			</header>

			<div className={styles['body__container']}>
				{messages.map((message: message) => (
					// value.id % 2 !== 0 || value.id === 0 ? (
					// 	<div
					// 		className={styles['body__container_message']}
					// 		key={value.id}
					// 	>
					// 		<p className={styles['message__sender']}>
					// 			{value.name}
					// 		</p>
					// 		<div className={styles['message__content']}>
					// 			<p>{value.text}</p>
					// 		</div>
					// 	</div>
					// ) : (
					// 	<div
					// 		className={styles['body__container_message']}
					// 		key={value.id}
					// 	>
					// 		<p>{value.name}</p>
					// 		<div className={styles['message__recipient']}>
					// 			<p>{value.text}</p>
					// 		</div>
					// 	</div>
					// )
					<div
						className={styles['body__container_message']}
						key={message.id}
					>
						<p className={styles['message__sender']}>
							{message.user}
						</p>
						<div className={styles['message__content']}>
							<p>{message.message}</p>
						</div>
					</div>
				))}

				<div className={styles['message__status']}>
					<p>Someone is typing...</p>
				</div>
				<div ref={messageRef}></div>
			</div>
		</>
	);
};

export default ChatBody;
