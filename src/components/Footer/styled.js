import styled from 'styled-components';
export const FooterArea = styled.footer`
	background-color: #eaeaea;
	padding: 100px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) and (max-width: 1023px){
		& {
			padding-right: 30px;
		}
	}
`;
export const Container = styled.div`
	width: 1100px;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 600px) {
		& {
			width: 100%;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
		}
	}
`;
export const FooterMenu = styled.nav`
	margin-right: 65px;
	@media (max-width: 600px) {
		& {
			margin-right: 0;
			text-align: center;
		}
	}
`;
export const FooterList = styled.ul`
	list-style: none;
`;
export const FooterListItem = styled.li`
	margin-bottom: 10px;
	&: last-child {
		margin-top: 30px;
	}
	a {
		text-decoration: none;
		color: #1d1d1f;
		font-size: 1.1rem;
		&: hover {
			color: #f15944;
		}
	}
`;
export const FooterContact = styled.div`
	@media (max-width: 600px) {
		& {
			text-align: center;
			background-color: #fff;
			width: 100%;
		}
	}
`;
export const Overall = styled.div`
	margin-bottom: 40px;
	.laOffice {
		display: flex;
		flex-direction: column;
		.laOfficeSpan {
			margin-bottom: 10px;
		}
	}
`;
export const Title = styled.h4`
	color: #1d1d1f;
	margin-bottom: 5px;
`;
export const Desc = styled.div`
	a {
		text-decoration: none;
		margin-right: 15px;
		i {
			font-size: 1.5rem;
		}
	}
`;
export const DescItem = styled.span`
	color: #757575;
	font-size: 1.1rem;
`;