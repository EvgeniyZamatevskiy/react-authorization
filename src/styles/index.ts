import styled, { createGlobalStyle } from 'styled-components'

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

export const Button = styled.button<{ mt?: string, width?: string, backgroundColor?: string, color?: string, height?: string }>`
  border-radius: 8px;
	cursor: pointer;
  border: none;
	font-weight: 700;
  font-size: 18px;

  margin-top: ${({ mt }) => mt || '0px'};
  width: ${({ width }) => width || '640px'};
	height: ${({ height }) => height || '60px'};
	background-color: ${({ backgroundColor }) => backgroundColor || '#4A67FF'};
  color: ${({ color }) => color || '#fff'};

  &:disabled{
  background-color: #99A9FF;
	cursor: no-drop;
}
`
