import './loader.css'
import {useEffect, useRef} from 'react';

function Loader() {
    const containerRef = useRef(null);
    const loaderRef = useRef(null);

    const bumpLoader = () => {
        let loaderElement = loaderRef.current;
        let containerElement = containerRef.current;

        loaderElement.style = "animation-name: pop; animation-duration: .7s; animation-iteration-count: 1;";

        setTimeout(() => {
            loaderElement.style = "display: none;"
            containerElement.style = "transform: translate(-50%, 0%);"
            setTimeout(() => {
                containerElement.style = "transform: translate(-50%, 0%); opacity: 0; transition: .3s; "
            }, 500);
        }, 500);
    }

    useEffect(() => {
        setTimeout(() => {
            bumpLoader();
        }, 10 * 190);
    }, []);

    return (
        <div ref={containerRef} className="loader-container">
            <div ref={loaderRef} className="loader">
                <img src='/images/good-for-health.jpeg'></img>
            </div>
        </div>
    )
}

export default Loader;