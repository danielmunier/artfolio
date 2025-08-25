import { DynamicBackground } from "@/components/dynamic-background";

const TestPage = () => {
    return (
        <div className="relative">
            <DynamicBackground backgroundType="starry-head" />
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <img 
                    src="/test.png" 
                    alt="test" 
                    className="w-[1000px] h-[1000px] max-w-full object-contain drop-shadow-lg"
                />
            </div>
        </div>
    )
};

export default TestPage;    