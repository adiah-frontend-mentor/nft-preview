import './app.scss';
import cardTop from './images/image-equilibrium.jpg';
import logo from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';
import eye from './images/icon-view.svg';

const Card = ({data}) => {
    return (
        <div className='card-wrapper'>
            <div className='card-top'>
                <img src={data.img} alt='nft image' />
                <div className='overlay'
                    style={{backgroundImage: `url(${eye})`}}
                ></div>
            </div>
            <div className='card-body'>
                <h1 className='title'>{data.title}</h1>
                <p className='body'>
                    {data.body}
                </p>
                <div className='stats'>
                    <div className='detail price'>
                        <img src={logo} alt='ethereum logo' />
                        <span>{`${data.price}ETH`}</span>
                    </div>
                    <div className='detail deadline'>
                        <img src={clock} alt='ethereum logo' />
                        <span>{`${data.time} left`}</span>
                    </div>
                </div>
                <div className='footer'>
                    <img src={data.avatar} alt='' />
                    <p>Creation of <span className='name'>{data.name}</span></p>
                </div>
            </div>
        </div>
    )
}

const cardData = {
    img: cardTop,
    title: "Equilibrium #3429",
    body: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041",
    time: "3 days",
    avatar: avatar,
    name: "Jules Wyvern"
}

function App() {
    return (
        <div className="page-wrapper">
            <Card 
                data={cardData}
            />
        </div>
    );
}

export default App;
