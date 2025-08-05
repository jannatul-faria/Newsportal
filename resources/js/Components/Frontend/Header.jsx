import TopBar from '@/Components/Frontend/TopBar';
import LogoBanner from '@/Components/Frontend/LogoBanner';
import MegaMenu from './MegaMenu';

export default function Header() { 
    return (
        <>
            <header>
                <div class="container-menu-desktop">
                    <TopBar />
                    <LogoBanner />
                    <MegaMenu />
                </div>
            </header>
        </>
        )
}
