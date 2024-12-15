import '../styles/index.css';

export default function Header() {

    return (
        <div className='h-full'>
            <div className="h-[140px] px-[120px] bg-[#153B63] flex justify-between items-center z-0">
                <div className="flex">
                    <div className='flex flex-col justify-center items-end'>
                        <div className="text-[30px] text-white">
                            BSRI Quiz
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* Also tried putting ViewProfile here, but then it doesn't fill the full screen */ }
            </div>
        </div>
    );
};


