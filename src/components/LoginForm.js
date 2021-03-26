import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { login } from 'redux/actions/authActions';

const LoginForm = () => {
	const dispatch = useDispatch();
	const onFinish = (values) => {
		dispatch(login(values, message));
	};

	return (
		<Form
			name="login"
			className="login-form"
			initialValues={{
				remember: true,
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
					placeholder="Username"
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
					<Checkbox>Keep me logged in</Checkbox>
				</Form.Item>
				{/* 
        <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					block="true"
					className="login-form-button"
					// color="#7D5C44"
					style={{
						background: '#7D5C44',
						boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
						borderRadius: '50px',
						height: 'auto',
						padding: '10px',
					}}
				>
					Login
				</Button>
				{/* Or <a href="">register now!</a> */}
			</Form.Item>
			<Form.Item
				style={{
					textAlign: 'center',
				}}
			>
				Don't have an Account ?{' '}
				<span
					style={{
						color: '#0DBA9C',
						fontWeight: '500',
					}}
				>
					Sign Up
				</span>
			</Form.Item>
		</Form>
	);
};
export default LoginForm;
