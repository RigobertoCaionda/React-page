import {Switch, Route} from 'react-router-dom';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
const Page = () => {
	return (
			<Switch>
				<Route exact path="/">
					<Work />
				</Route>

				<Route>
					<NotFound />
				</Route>
			</Switch>
		);
}
export default Page;