import styled from 'styled-components';
export const MenuLink = styled.a`
	text-decoration: none;
	color: ${props=>props.active ? '#f15944' : '#1a1a1a'};
	font-size: 1.2rem;
	&: hover {
		color: #f15944;
	}
`;