import { HeaderContainer, HeaderElementsOnTheRight, HeaderLeftSpell, HeaderProfile, HeaderProfileName, LettersInTheCenter, LettersOnTheLeft, LettersOnTheRight } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderLeftSpell>
                <LettersOnTheLeft>
                    MY
                </LettersOnTheLeft>
                <LettersInTheCenter>
                    TODO
                </LettersInTheCenter>
                <LettersOnTheRight>
                    APP
                </LettersOnTheRight>
            </HeaderLeftSpell>

            <HeaderElementsOnTheRight>
                <HeaderProfile />

                <HeaderProfileName>
                    Alberto Barbosa
                </HeaderProfileName>
            </HeaderElementsOnTheRight>
        </HeaderContainer>
    );
}