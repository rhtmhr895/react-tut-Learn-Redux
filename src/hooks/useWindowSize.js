import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {

        const handleReszie = () => {
            setWindowSize({
                width:window.innerWidth,
                height:window.innerHeight
            });
        }

        handleReszie();

        window.addEventListener("resize", handleReszie);
        
        // const cleanUp = () => {
        //     // console.log('runs if a use effect dependency changes');
        //     window.removeEventListener("resize", handleReszie);
        // }

        //  return cleanUp;
        return () => window.removeEventListener("resize", handleReszie);
    },[])
    return windowSize;

}

export default useWindowSize;

