import { useCallback } from "react";
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {

    const getStarsArr = useCallback(() => {
        const emptyStar = "far fa-star";
        const halfStar = "fas fa-star-half-alt";
        const fullStar = "fas fa-star";

        const maxCount = 5;
        const numberOfFull = String(value).includes('.5') ? value - 0.5 : value;
        const numberOfhalf = String(value).includes('.5') ? 1 : 0;
        const numberOfEmpty = maxCount - numberOfFull - numberOfhalf;

        //console.log(value, numberOfFull, numberOfhalf, numberOfEmpty);

        let starsArr = [];

        for (let i = 0; i < numberOfFull; i++) {
            starsArr.push(fullStar);
        }

        for (let i = 0; i < numberOfhalf; i++) {
            starsArr.push(halfStar);
        }

        for (let i = 0; i < numberOfEmpty; i++) {
            starsArr.push(emptyStar);
        }


        return starsArr;
    }, [value])


    return (
        <>
            <div>
                    {getStarsArr()?.length > 1 &&
                        getStarsArr().map((star, index) =>
                        <span key={index}>
                            <i 
                            style={{color}} 
                            className={star} 
                            aria-hidden="true"
                            ></i>
                        </span>
                        )
                    }
                     <span>{text && text}</span>
            </div>
        </>
    );
}

Rating.defaultProps={
    color:'#f8e825'
}


Rating.propTypes={
    value:PropTypes.number.isRequired, 
    text:PropTypes.string.isRequired, 
    color:PropTypes.string
}

export default Rating;