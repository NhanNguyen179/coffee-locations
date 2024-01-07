// components
import { Navbar, Footer } from "@/components";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutInterface {
    children: React.ReactNode;
}

const PageLayout = ({ children }: LayoutInterface) => {
    return (
        <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
}
export default PageLayout;