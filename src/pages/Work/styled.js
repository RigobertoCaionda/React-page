import styled from 'styled-components';
export const OurWorkArea = styled.div`
	margin-top: 30px;
`;
export const OwaLinks = styled.div`
	padding-left: 65px;
	margin-top: 10px;
	margin-bottom: 10px;
	a {
		text-decoration: none;
		margin-right: 35px;
		color: #1d1d1f;
		font-size: 1.2rem;
		&: hover {
			color: #f15944;
		}
	}
	@media(max-width: 600px) {
		& {
			padding-left: 20px;
		}
	}
`;
export const OurWorkList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;