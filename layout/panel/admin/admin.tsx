import Header from 'layout/common/header/header';
import Sidebar from 'layout/panel/sidebar/sidebar';
import {HeaderLinks} from "layout/panel/admin/links/headerLinks";
import {SidebarLinks} from "layout/panel/admin/links/sidebarLinks";
import Accordion from "components/accordion/accordion";
import Footer from "layout/common/footer/footer";

type Props = {
    children: React.ReactNode
}
const AdminLayout = ({children}: Props) => {

    // const [open, setOpen] = useState(false);
    //
    // const handleOpen = useCallback(() => {
    //     setOpen(true);
    // }, []);
    //
    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const handleCus = () => {
    //     setOpen(!open);
    // };

    return (
        <>
            <div className="container panel">
                <header className="header">
                    <Header links={HeaderLinks}/>
                </header>
                <Accordion items={["پروفایل"]}/>
                <main className="main">
                    <aside className="sidebar border flex-shrink-0">
                        <Sidebar links={SidebarLinks}/>
                    </aside>
                    <div className="panel__main flex-grow-1" style={{width:"calc(100% - 300px)"}}> {children}</div>
                </main>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>

    );
};

export default AdminLayout;
