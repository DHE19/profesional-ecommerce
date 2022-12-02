import Footer from "./Footer"
import HeadInfo from "./HeadInfo"
import Nav from "./Nav"


interface IProps{
    children: React.ReactNode;
    title?:string;
}
const Layout:React.FC<IProps> = ({children,title}) => {
    return (
        <div>
            <HeadInfo title={title}/>
            <Nav/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
