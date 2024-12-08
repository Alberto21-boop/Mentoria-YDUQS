import { CardTaskItems } from '../../components/CardTaskItems';
import { Header } from "../../components/Header";
import { SubHeaderGoToTask } from '../../components/SubHeaderGoToTask';
import { ContainContainer, LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    // location SubHeaderGoToTask
    return (
        <LayoutContainer>
            <Header />
            <ContainContainer>
                <SubHeaderGoToTask />

                <Outlet />
            </ContainContainer>
        </LayoutContainer>
    );
}