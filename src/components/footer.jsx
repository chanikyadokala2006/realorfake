

const Footer = () => {

    return (
        <>
            <footer className="w-full border-t border-surface-container-low bg-[#faf8ff]">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full">
                    <div className="text-[0.6875rem] uppercase tracking-[0.05em] font-medium text-[#5a5e6c]">
                        © 2024 Precisian Optics. Technical Editorial Standards.
                    </div>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a className="text-[0.6875rem] uppercase tracking-[0.05em] font-medium text-on-surface-variant hover:underline decoration-[#5a5e6c] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Documentation</a>
                        <a className="text-[0.6875rem] uppercase tracking-[0.05em] font-medium text-on-surface-variant hover:underline decoration-[#5a5e6c] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Privacy</a>
                        <a className="text-[0.6875rem] uppercase tracking-[0.05em] font-medium text-on-surface-variant hover:underline decoration-[#5a5e6c] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Terms</a>
                        <a className="text-[0.6875rem] uppercase tracking-[0.05em] font-medium text-on-surface-variant hover:underline decoration-[#5a5e6c] underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">API</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer