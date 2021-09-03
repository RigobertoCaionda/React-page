import {useState} from 'react';
import {
	HeaderArea, 
	Menu, 
	LogoArea, 
	MenuArea, 
	MenuToggle, 
	MenuToggleIcon,
	MenuList,
	ListItem,
	SideMenu,
	SideHeader,
	SideLogo,
	XButton,
	SideLinks,
	SocialMedia
} from './styled';
import {Link} from 'react-router-dom';
import MenuItem from '../../components/MenuItem';
import MenuItemSide from '../../components/MenuItemSide';
const Page = () => {
	const [showMenu, setShowMenu] = useState('none');
	const handleMenuToggleClick = () => {
			setShowMenu('block');
	}
	const handleXButtonClick = () => {
		setShowMenu('none');
	}
	return (
		<>
			<HeaderArea>
				<LogoArea>
					<Link to="/">TROIKA</Link>
				</LogoArea>

				<MenuArea>
					<Menu>
						<MenuList>
							<ListItem>
								<MenuItem link="/">Work</MenuItem>
							</ListItem>
							<ListItem>
								<MenuItem link="/digital">Digital</MenuItem>
							</ListItem>
							<ListItem>
								<MenuItem link="/about">About</MenuItem>
							</ListItem>
							<ListItem>
								<MenuItem link="/insights">Insights</MenuItem>
							</ListItem>
							<ListItem>
								<MenuItem link="/fandom">Fandom</MenuItem>
							</ListItem>
						</MenuList>
					</Menu>
					<MenuToggle onClick={handleMenuToggleClick}>
						<MenuToggleIcon className="fas fa-bars"></MenuToggleIcon>
					</MenuToggle>
				</MenuArea>
			</HeaderArea>
			<SideMenu visible={showMenu}>
				<SideHeader>
					<SideLogo><Link to="/">TROIKA</Link></SideLogo>
					<XButton onClick={handleXButtonClick}>X</XButton>
				</SideHeader>
				<SideLinks>
					<MenuItemSide link="/">Work</MenuItemSide>
					<MenuItemSide link="/digital">Digital</MenuItemSide>
					<MenuItemSide link="/about">About</MenuItemSide>
					<MenuItemSide link="/insights">Insights</MenuItemSide>
					<MenuItemSide link="/fandom">Fandom</MenuItemSide>
					<MenuItemSide link="/people" tam={1.8}>People</MenuItemSide>
					<MenuItemSide link="/newsfeed" tam={1.8}>Newsfeed</MenuItemSide>
					<MenuItemSide link="/contact" tam={1.8}>Contact</MenuItemSide>
				</SideLinks>
				<SocialMedia>
					<a href="https://algoaqui.com"><i className="fab fa-facebook"></i></a>
						<a href="https://algoaqui.com"><i className="fab fa-linkedin"></i></a>
						<a href="https://algoaqui.com"><i className="fab fa-youtube"></i></a>
						<a href="https://algoaqui.com"><i className="fab fa-instagram"></i></a>
						<a href="https://algoaqui.com"><i className="fab fa-twitter"></i></a>
				</SocialMedia>
			</SideMenu>
		</>
		);
}
export default Page;