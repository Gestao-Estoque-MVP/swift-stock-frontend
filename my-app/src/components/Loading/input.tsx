export const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div 
                className="w-12 h-12 rounded-full animate-rotate"
                style={{
                    background: 'radial-gradient(farthest-side,#766DF4 94%,transparent) top/8px 8px no-repeat, conic-gradient(transparent 30%,#766DF4)',
                    WebkitMask: 'radial-gradient(farthest-side,transparent calc(100% - 8px),#000 0)'
                }}
            ></div>
        </div>
    );
};
