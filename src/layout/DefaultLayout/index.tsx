import { CardTaskItems } from '../../components/CardTaskItems';
import { Header } from "../../components/Header";
import { SubHeaderGoToTask } from '../../components/SubHeaderGoToTask';
import { ContainContainer, LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <ContainContainer>
                <SubHeaderGoToTask />
                <CardTaskItems />
                <Outlet />
            </ContainContainer>
        </LayoutContainer>
    );
}