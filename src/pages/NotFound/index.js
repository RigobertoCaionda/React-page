import {Container, GoIndex, NotFoundText} from './styled';
import {Link} from 'react-router-dom';
const Page = () => {
	return (
			<Container>
				<GoIndex><Link to="/">Go back to Index</Link></GoIndex>
				<NotFoundText>Oops, Page not found!</NotFoundText>
			</Container>
		);
}
export default Page;