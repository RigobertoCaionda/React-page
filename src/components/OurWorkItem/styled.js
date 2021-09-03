import styled from 'styled-components';
export const Container = styled.div`
	height: 250px;
	width: calc(100% / 3);
	&: hover {
		background-color: #e45440;
		.bgImage {
			opacity: 0.2;
		}
		.title {
			display: block;
		}
	}
	@media (max-width: 600px) {
		& {
			width: calc(100% / 2);
			height: 175px;
		}
	}
`;
export const BackgroundImage = styled.div`
	background: url('/assets/image.jpg');
	height: 100%;
`;
export const BackgroundImageLink = styled.a`
	text-decoration: none;
`;
export const ImageDescription = styled.h2`
	display: none;
	padding: 30px 15px 30px 20px;
	color: #fff;
`;