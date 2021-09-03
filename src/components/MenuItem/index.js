import {MenuLink} from './styled';
import {useHistory, useLocation} from 'react-router-dom';
const Page = ({children, link}) => {
	const history = useHistory();
	const location = useLocation();
	let activeLink = location.pathname === link;
	const handleLinkClick = (e) => {
		e.preventDefault();
		history.push(link);
	}
	return (
			<MenuLink href={link} active={activeLink} onClick={handleLinkClick}>{children}</MenuLink>
		);
}
export default Page;