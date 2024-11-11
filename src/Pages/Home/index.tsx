import { CardTaskItems } from '../../components/CardTaskItems';
import { SubHeaderGoToTask } from '../../components/SubHeaderGoToTask';
import { HomeBackground, HomeContainer } from './styles';

export function Home() {
    return (
        <HomeBackground>
            <HomeContainer>
                <SubHeaderGoToTask />
                <CardTaskItems />
            </HomeContainer>
        </HomeBackground>
    );
}