import {Link} from 'react-router-dom';
import {
	FooterArea, 
	FooterMenu,
	FooterList,
	FooterListItem,
	FooterContact,
	Container,
	Overall,
	Title,
	Desc,
	DescItem
} from './styled';
const Page = () => {
	return (
			<FooterArea>
				<Container>
					<FooterMenu>
						<FooterList>
							<FooterListItem><Link to="/">Work</Link></FooterListItem>
							<FooterListItem><Link to="/digital">Digital</Link></FooterListItem>
							<FooterListItem><Link to="/about">About</Link></FooterListItem>
							<FooterListItem><Link to="/insights">Insights</Link></FooterListItem>
							<FooterListItem><Link to="/newsfeed">Newsfeed</Link></FooterListItem>
							<FooterListItem><Link to="/people">People</Link></FooterListItem>
							<FooterListItem><Link to="/fandom">Fandom</Link></FooterListItem>
							<FooterListItem><Link to="/contact">Contact</Link></FooterListItem>
							<FooterListItem><Link to="/troika">Troika Media Group</Link></FooterListItem>
						</FooterList>
					</FooterMenu>

					<FooterContact>
						<Overall>
							<Title>Give us a ring</Title>
							<Desc>
								<DescItem>945 041 707</DescItem>
							</Desc>
						</Overall>

						<Overall>
							<Title>LA Office</Title>
							<Desc className="laOffice">
								<DescItem className="laOfficeSpan">1715 N Gower St</DescItem>
								<DescItem className="laOfficeSpan">Los Angeles, CA</DescItem>
								<DescItem className="laOfficeSpan">90028</DescItem>
							</Desc>
						</Overall>

						<Overall>
							<Title>Follow us</Title>
							<Desc>
								<a href="https://algoaqui.com"><i className="fab fa-facebook"></i></a>
								<a href="https://algoaqui.com"><i className="fab fa-linkedin"></i></a>
								<a href="https://algoaqui.com"><i className="fab fa-youtube"></i></a>
								<a href="https://algoaqui.com"><i className="fab fa-instagram"></i></a>
								<a href="https://algoaqui.com"><i className="fab fa-twitter"></i></a>
							</Desc>
						</Overall>
					</FooterContact>
				</Container>
			</FooterArea>
		);
}
export default Page;