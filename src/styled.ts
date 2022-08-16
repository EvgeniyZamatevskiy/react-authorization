import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledFlex = styled.div<{ direction?: string, justify?: string, align?: string }>`
	display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justify }) => justify || 'stretch'};
	align-items: ${({ align }) => align || 'stretch'};
`

export const StyledTitle = styled.h1`
	text-align: center;
  position: absolute;
	top: 8%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-weight: 700;
	font-size:  64px;
	line-height: 78px;
`

export const StyledButton = styled.button<{ mt?: string, width?: string, backgroundColor?: string, color?: string, height?: string }>`
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