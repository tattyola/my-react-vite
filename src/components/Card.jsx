
const Card = ({item}) => {
    console.log(item.name)
    return (
        <div className='card'>
            <p className='text'>{item.name}</p>
        </div>
    );
};

export default Card;
