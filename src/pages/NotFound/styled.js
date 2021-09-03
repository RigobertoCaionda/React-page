import styled from 'styled-components';
export const Container = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #f76141;
	padding: 60px 60px 0 60px;
	display: flex;
	flex-direction: column;
	@media (max-width: 600px) {
		& {
			position: fixed;
		}
	}
`;
export const GoIndex = styled.div`
	display: flex;
	justify-content: flex-end;
	a {
		color: #fff;
		text-decoration: none;
		font-size: 1.3rem;
	}
`;
export const NotFoundText = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-size: 3rem;
`;