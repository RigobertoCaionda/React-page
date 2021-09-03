import styled from 'styled-components';
export const MenuLink = styled.a`
	text-decoration: none;
	margin-bottom: 20px;
	color: ${props=>props.active ? '#1a1a1a' : '#fff'};
	font-size: ${props=>props.size ? `${props.size}rem` : '2.5rem'};
`;