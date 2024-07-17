import "../../css/ScrollBtn.css"
import { gsap } from "gsap";
import React, { useState } from 'react';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)

export function ScrollBtn(){

    const [prevCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(prevCount => {
        const scrollCount = prevCount + 1;
        if (scrollCount === 1) {
            gsap.to(window, { duration: 1, scrollTo: window.innerHeight * 0.51 });
        } else if (scrollCount === 2) {
            gsap.to(window, { duration: 1, scrollTo: window.innerHeight * 4.5 });
        } else if (scrollCount === 3) {
            gsap.to(window, { duration: 1, scrollTo: 0 });
            return 0;
        }
        return scrollCount;
        });
    };

    return(
        <a className="scrollBtn" onClick={handleClick}>SCROLL</a>
    )
}