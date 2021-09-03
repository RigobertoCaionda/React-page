import styled from 'styled-components';
export const HeaderArea = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 95px;
	padding: 0 65px;
	@media (max-width: 600px) {
		padding: 0 20px;
	}
`;
export const LogoArea = styled.div`
	a {
		text-decoration: none;
		font-weight: bold;
		color: #1a1a1a;
		font-size: 1.6rem;
	}
`;
export const Menu = styled.nav`
	@media(max-width: 600px) {
		& {
			display: none;
		}
	}
`;
export const MenuArea = styled.div`
	display: flex;
`;
export const MenuToggle = styled.div`
	cursor: pointer;
`;
export const MenuToggleIcon = styled.i`
	font-size: 2rem;
	color: #1a1a1a;
`;
export const MenuList = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
`;
export const ListItem = styled.li`
	margin-right: 30px;
`;
export const SideMenu = styled.div`
	display: ${props=>props.visible};
	background-color: #f76141;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 55px 55px 0 80px;
	color: #fff;
	overflow-y: auto;
	@media (max-width: 600px) {
		& {
			padding: 50px 10px 0 10px;
		}
	}
`;
export const SideHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;
export const SideLogo = styled.div`
	a {
		font-size: 2rem;
		color: #fff;
		text-decoration: none;
	}
`;
export const XButton = styled.div`
	font-size: 2rem;
	cursor: pointer;
`;
export const SideLinks = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	margin-bottom: 30px;
`;
export const SocialMedia = styled.div`
	display: flex;
	justify-content: flex-end;
	a {
		margin-right: 15px;
		font-size: 1.2rem;
	}
`;