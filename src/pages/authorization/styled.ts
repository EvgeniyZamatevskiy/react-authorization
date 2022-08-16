import styled from 'styled-components'

export const Input = styled.input<{ border?: string, color?: string }>`
	margin-top: 10px;
	margin-bottom: 8px;
  background: #F5F5F5;
  border-radius: 8px;
	outline: none;
	width: 640px;
	height: 60px;
	padding: 20px;
	font-size: 16px;
	box-shadow: inset 0 0 0 50px #F5F5F5;

	color: ${({ color }) => color || '#000'};
	border: ${({ border }) => border || 'none'};
`

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
`

export const ErrorServerContainer = styled.div`
	display: flex;
	align-items: center;
	background: #F5E9E9;
	border: 1px solid #E26F6F;
	border-radius: 8px;
	padding: 20px;
	width: 640px;
	min-height: 60px;
`
export const ErrorServerMessage = styled.div`
	margin-left: 14px;
	width: 570px;
	overflow-wrap: break-word;
`

export const Ellipse = styled.span`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  background-color: #FFC8C8;
  color: #EE6565;
`

export const ErrorMessageText = styled.p`
	color: #E26F6F;
	font-size: 14px;
`

export const Label = styled.label`
	margin-top: 20px;
	cursor: pointer;
	width: 180px;
	display: flex;
`

export const Checkbox = styled.input`
	margin-right: 14px;
	cursor: pointer;
	width: 20px;
	height: 20px;
`

export const Span = styled.span<{ mt?: string }>`
	margin-top: ${({ mt }) => mt || '0px'};
`
