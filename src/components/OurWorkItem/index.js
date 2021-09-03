import {
	Container, 
	BackgroundImage, 
	BackgroundImageLink,
	ImageDescription
} from './styled';
const Page = (props) => {
	return (
			<Container>
				<BackgroundImageLink href={`/work/${props.data.id}`}>
					<BackgroundImage className="bgImage">
						<ImageDescription className="title">
							{props.data.description}
						</ImageDescription>
					</BackgroundImage>
				</BackgroundImageLink>
			</Container>
		);
}
export default Page;