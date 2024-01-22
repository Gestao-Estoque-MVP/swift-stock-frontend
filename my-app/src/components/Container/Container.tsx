
interface IContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({children, className}: IContainerProps) => {
    return(
        <div className={`my-0 mx-auto p-4 w-screen max-w-screen-2xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
