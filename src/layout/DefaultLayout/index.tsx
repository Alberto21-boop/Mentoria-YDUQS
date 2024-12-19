import { CardTaskItems } from '../../components/CardTaskItems';
import { Header } from "../../components/Header";
import { Menu } from '../../components/Menu';
import { ContainContainer, LayoutContainer } from "./styles";
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    // location Menu
    return (
        <LayoutContainer>
            <Header />
            <ContainContainer>
                <Menu />
                <CardTaskItems />
                <Outlet />
            </ContainContainer>
        </LayoutContainer>
    );
}