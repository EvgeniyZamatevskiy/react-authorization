import styled from 'styled-components'

export const ProfileContainer = styled.div<{ direction?: string, justify?: string, align?: string }>`
	display: flex;
	
  flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justify }) => justify || 'stretch'};
	align-items: ${({ align }) => align || 'stretch'};
`
export const Greeting = styled.div`
	font-size: 40px;
	line-height: 48px;
`
