import {useRef} from "react";
import {FiArrowLeft} from "react-icons/fi";
import {LuArrowRight} from "react-icons/lu";
import Card from "./Card";

const Carousel = ({data}) => {
    let carouslRef = useRef(null);
    const prev = () => {
        carouslRef &&
        carouslRef.current &&
        carouslRef.current.scrollTo({
            behavior: "smooth",
            top: 0,
            left:
                carouslRef.current.scrollLeft - carouslRef.current.clientWidth * 0.5,
        });
    };
    const next = () => {
        carouslRef &&
        carouslRef.current &&
        carouslRef.current.scrollTo({
            behavior: "smooth",
            top: 0,
            left:
                carouslRef.current.scrollLeft + carouslRef.current.clientWidth * 0.5,
        });
    };
    return (
        <>
            <div className='header'>Carousel demo</div>
            <div className='carousel'>
                <button className='direction' onClick={prev}>
                    <FiArrowLeft className='arrow' alt="left button"/>
                </button>
                <div className='card-div'>
                    <main className='card-scroll' ref={carouslRef}>
                        {data.map((item, i) => (
                            <Card item={item} key={i}/>
                        ))}
                    </main>
                </div>
                <button className='direction' onClick={next}>
                    <LuArrowRight className='arrow' alt="right button"/>
                </button>
            </div>
        </>
    );
};

export default Carousel;
