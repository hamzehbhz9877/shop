import Header from 'layout/common/header/header';
import {HeaderLinks} from "layout/panel/admin/links/headerLinks";
import Accordion from "components/accordion/accordion";
import Footer from "layout/common/footer/footer";

type Props = {
    children: React.ReactNode
}
const MainLayout = ({children}: Props) => {

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
            <div className="container">
                <header className="header">
                    <Header links={HeaderLinks}/>
                </header>
                <Accordion items={["محصولات","نام محصول"]}/>
                <main>
                     {children}
                </main>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>

    );
};

export default MainLayout;
