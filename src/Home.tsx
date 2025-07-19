import './Home.css';
export default function Home() {
    return (
        <div className="container">
            <div className="hero"></div>

            <div className="promoted">
                <img src="/assets/images/robot-parts/head-friendly.png" alt="Friendly Robot Head" />
                <div className="promo-text">
                    <div className="promo-main-text">DISPELL THE ROBOT APOCALYPSE MYTH</div>
                    <div className="promo-sub-text cta">
                        <div>SAVE 20% ON OUR FRIENDLIEST</div>
                        <div>ROBOT HEADS</div>
                    </div>
                </div>
                <img src="/assets/images/robot-parts/head-big-eye.png" alt="Big Eye Head" />
            </div>

            <ul className="robot-parts-cta">
                <li>
                    <a className="part">
                        <img src="/assets/images/robot-parts/head-shredder.png" alt="Robot Heads" />
                        <div>ROBOT HEADS</div>
                    </a>
                </li>
                <li>
                    <a className="part">
                        <img src="/assets/images/robot-parts/arm-articulated-claw.png" alt="Robot Arms" />
                        <div>ROBOT ARMS</div>
                    </a>
                </li>
                <li>
                    <a className="part">
                        <img src="/assets/images/robot-parts/torso-gauged.png" alt="Robot Torsos" />
                        <div>ROBOT TORSOS</div>
                    </a>
                </li>
                <li>
                    <a className="part">
                        <img src="/assets/images/robot-parts/base-spring.png" alt="Robot Bases" />
                        <div>ROBOT BASES</div>
                    </a>
                </li>
            </ul>

            <div className="white-paper">
                <img src="/assets/images/robot-apocalypse.png" alt="Robot Apocalyse" />
                <div className="text">
                    <div>
                        <div className="header-text cta">Will they kill us all?</div>
                        <div className="sub-text">
                            <p>10 Myths About the</p>
                            <p>Robot Apocalyse</p>
                        </div>
                    </div>
                    <div className="large-text">WHITE PAPER</div>
                    <a href="" className="learn-more">Learn More</a>
                </div>
            </div>
        </div>
    );
}