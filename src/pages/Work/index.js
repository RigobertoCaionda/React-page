import {OurWorkArea, OwaLinks, OurWorkList} from './styled';
import {PageTitle} from '../../AppStyled';
import {Link} from 'react-router-dom';
import OurWorkItem from '../../components/OurWorkItem';
const Page = () => {
	return (
			<OurWorkArea>
				<PageTitle>Our Work</PageTitle>
				<OwaLinks>
					<Link to="/objective">Objective</Link>
					<Link to="/industry">Industry</Link>
				</OwaLinks>
				<OurWorkList>
					<OurWorkItem data={{id: '12345erd', 
					description: 'Descricao da primeira imagem, interessante'}}/>
					<OurWorkItem data={{id: '397854hfs', description: 'Descricao da segunda imagem, interessante'}}/>
					<OurWorkItem data={{id: '34222dsc', description: 'Descricao da terceira imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744ngd', description: 'Descricao da quarta imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744vvc', description: 'Descricao da quinta imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744nsas', description: 'Descricao da sexta imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744gfm', description: 'Descricao da setima imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744kllj', description: 'Descricao da oitava imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744opi', description: 'Descricao da decima imagem, interessante'}}/>
					<OurWorkItem data={{id: '90744sdf'}}/>
					<OurWorkItem data={{id: '90744scx', description: 'Descricao da decima primeira imagem.'}}/>
				</OurWorkList>
			</OurWorkArea>
		);
}
export default Page;