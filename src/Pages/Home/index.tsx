import { InputTask } from '../../components/InputTask';
import { HomeBackground, HomeContainer } from './styles';

export function Home() {
    return (
        <HomeBackground>
            <HomeContainer>
                <InputTask></InputTask>
            </HomeContainer>
        </HomeBackground>
    );
}