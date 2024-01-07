// components
interface LayoutInterface {
    children: React.ReactNode;
}

const NoLayout = ({ children }: LayoutInterface) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            {children}
        </div>
    );
}
export default NoLayout;