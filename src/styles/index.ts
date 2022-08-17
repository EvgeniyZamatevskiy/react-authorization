import styled, { createGlobalStyle, css } from 'styled-components'

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
	text-align: center;
  position: absolute;
	top: 8%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 700;
	font-size:  64px;
	line-height: 78px;
`

export const Span = styled.span<{ mt?: string, weight?: string }>`
	margin-top: ${({ mt }) => mt || '0px'};
	font-weight: ${({ weight }) => weight || '400'};
`

export const Button = styled.button<{ primary?: boolean, secondary?: boolean }>`
  border-radius: 8px;
	cursor: pointer;
  border: none;
	font-weight: 700;
  font-size: 18px;
  height: 60px;

  ${({ primary }) => primary && css`
  margin-top: 40px;
  width: 640px;
  background-color: #4A67FF;
  color: #fff;

  &:disabled {
  background-color: #99A9FF;
	cursor: no-drop;
}
`}

  ${({ secondary }) => secondary && css`
  margin-top: 50px;
  width: 200px;
  background-color: #F5F5F5;
  color: #000;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
  background-color: #F0F0F0;
}
`}
`
