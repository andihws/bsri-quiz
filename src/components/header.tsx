/*
 * Header for The Wily Network app, contains logo and user profile icon
 * @author Alanda Sendlakowski
 * @author Allison Zhang
 * @author Logan P
 * @author Oliver Bello
 * @author Kerem Ozturk
 *
 */

import '../styles/index.css';
import { useState } from 'react';

export default function Header() {

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleOnClickClose = () => {
        setIsProfileOpen(false);
    }

    return (
        <div className='h-full'>
            <div className="h-[140px] px-[120px] bg-[#173051] flex justify-between items-center z-0">
                <div className="flex">
                    <img className="h-[60px] object-scale-down" src={wily}/>
                    <div className='flex flex-col justify-center items-end'>
                        <div className="text-[30px] text-white wilyFontBree">
                            the wily network
                        </div>
                        <div className="wilyFontNoSerif wilyLightBlue mt-[-10px] text-[15px] w-max max-sm:ml-[20%] text-right">
                            wish lists
                        </div>
                    </div>
                </div>
                <div className= "rounded-full h-[50px] w-[50px] bg-gradient-to-b from-[#5A78FF] to-[#49A9DD] flex justify-center items-center text-white wilyFontBree" onClick={() => setIsProfileOpen(true)}>KC</div>

                <ViewProfile opened={isProfileOpen} onClickClose={handleOnClickClose} />
            </div>
            <div className=''>
                {/* Also tried putting ViewProfile here, but then it doesn't fill the full screen */ }
            </div>
        </div>
    );
};


