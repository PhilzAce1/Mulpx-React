import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from 'redux/actions/authActions';
const SigninForm = () => {
	const dispatch = useDispatch();
	const onFinish = (values) => {
		dispatch(
			register(values, () => {
				message.success('Successfully Logged in');
			})
		);
	};

	return (
		<Form
			name="signup_form"
			className="login-form"
			initialValues={{
				remember: false,
			}}
			layout="vertical"
			onFinish={onFinish}
		>
			<Form.Item
				name="email"
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}
				label="Email"
			>
				<Input
					//   prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Email"
					className="custom_input"
				/>
			</Form.Item>
			<Form.Item
				name="fullname"
				rules={[
					{
						required: true,
						message: 'Please input your Full name!',
					},
				]}
				label="Fullname"
			>
				<Input
					//   prefix={<LockOutlined className="site-form-item-icon" />}
					type="text"
					placeholder="Fullname"
					className="custom_input"
				/>
			</Form.Item>
			<Form.Item
				name="phoneNumber"
				rules={[
					{
						required: true,
						message: 'Please input your Phone number!',
					},
				]}
				label="Phone Number"
			>
				<Input
					//   prefix={<LockOutlined className="site-form-item-icon" />}
					type="tel"
					placeholder="Phone number"
					className="custom_input"
				/>
			</Form.Item>

			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}
				label="Password"
			>
				<Input
					//   prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
					className="custom_input"
				/>
			</Form.Item>

			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>
						Get emails from MulpX about product updates, industry new, and
						events. If you change your mind, you can unsubscribe at any time.
						<span
							style={{
								color: '#0DBA9C',
								fontWeight: '500',
							}}
						>
							Privacy Policy
						</span>
					</Checkbox>
				</Form.Item>
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					block="true"
					className="login-form-button"
					style={{
						background: '#7D5C44',
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
						borderRadius: '50px',
						height: 'auto',
						padding: '10px',
					}}
				>
					Sign up
				</Button>
				{/* Or <a href="">register now!</a> */}
			</Form.Item>
			<Form.Item
				style={{
					textAlign: 'center',
				}}
			>
				Have an Account ?{' '}
				<span
					style={{
						color: '#0DBA9C',
						fontWeight: '500',
					}}
				>
					Sign In
				</span>
			</Form.Item>
		</Form>
	);
};
export default SigninForm;
