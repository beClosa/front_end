import React, {useState} from "react";
import Arrow from "../images/icons/arrow.svg";
import Description from "../components/Description/Description";
import TypingEffect from "react-typing-effect";
import SectionComponent from "../components/SectionComponent/SectionComponent";
import Button from "../components/Buttons/ButtonComponent";
import Card from "../components/CardComponent/Card";
import Icon from "../images/icons/closa-logo.svg";
import { v4 as uuidv4 } from "uuid";
import Container from "../components/Container/ContainerComponent";
import ScrollAnimation from 'react-animate-on-scroll';
import Input from "../components/InputComponent/Input.js";
import Label from "../components/LabelComponent/Label.js";
import ClosaLogo from "../images/icons/closa-logo-with-text.svg";
import Warning from "../components/TextComponent/Warning";

const Home = () => {
    const [refValue, setRef] = useState("");
    const [isRefError, setRefError] = useState(false);
    const [errorMessage, setErrorMessage ] = useState("");
    const [tokens] = useState([
        {
            id : uuidv4(),
            value : "#123456"
        }
    ]);
    const cards = [
        {
            id : uuidv4(),
            heading : "Habit-forming",
            description : "Do what matters most to you every day, and do it together with our members."
        },
        {
            id : uuidv4(),
            heading : "Retrospective",
            description : "Evaluate your progress every week and improve your workflow."
        },
        {
            id : uuidv4(),
            heading : "1 on 1 Talk",
            description : "Meet new individuals from diverse background, and unlock new opportunities."
        },
        {
            id : uuidv4(), 
            heading : "Share Experience",
            description : "New insight and perspective every day from our community activities shared to you."
        }
    ];
    function changeRef(event){
       let value = event.target.value;
       if(value.length <= 17){
          setRef(event.target.value);
          if(value.length > 0){
              setRefError(false);
              setErrorMessage("");
          }
       }
    }
    function submitRef(e){
        e.preventDefault();
        let stringCheckNull = /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/g
        let stringCheckLimit = /^([1-9]|[1-9][0-9]|17)$/g;
        let resultCheck = stringCheckNull.test(refValue);
        let resultLimit = stringCheckLimit.test(refValue);
        if(!resultCheck){
            if(!resultLimit){
                setRefError(false);
                let filterToken = tokens.filter(token => token.value === refValue);
                if(filterToken.length !== 0){
                    setRefError(true);
                    setErrorMessage("Already used")
                }else{
                    setRefError(true);
                    setErrorMessage("Not Found") 
                }
            }else{
                setErrorMessage("You can't input the text more than 16");
                setRefError(true)
            }
        }else{
            setErrorMessage("You need to input referral code")
            setRefError(true);
        }
    }

    function removeDuplicateCharacter(text){
       let resultText = text.split("#").join("");
       return resultText;
    }
    return (
        <div className="home">
            <div className="home__wrapper">
                <SectionComponent className="section__one heading">
                    <ScrollAnimation animateIn="fadeInUp">
                        <Container>
                        <div className="section__one-wrapper">
                            <Description description={[ 
                                <TypingEffect
                                    speed={50}
                                    typingDelay={100}
                                    eraseDelay={1000}
                                    text=
                                    {
                                        [
                                            "Do what matters",
                                            "Get things done",
                                            "Do what you love",
                                            "Live life to the fullest",
                                            "Practice",
                                            "Make it count"
                                        ]
                                    }
                                    cursor={<strong>_</strong>}
                                />, "every day"]}
                            />
                            <div className="section__one-button">
                               <a href="https://veylectra.typeform.com/to/torkcFdg">
                                <Button>
                                        <div className="section__one-button-flex">
                                            <div className="section__one-button-text">
                                                Join the waitlist
                                            </div>
                                            <div className="section__one-button-arrow">
                                                →
                                            </div>
                                        </div>
                                    </Button>
                               </a>
                            </div>
                            </div>
                            <img src={Arrow} alt="White arrow bottom" className="arrow_white animated infinite fadeInDown slower"/>
                    </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__seven">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                            <Container>
                                <div className="section__seven-wrapper">
                                    <Description description={["We are a community of ", <br/>, <TypingEffect
                                            speed={50}
                                            typingDelay={100}
                                            eraseDelay={1000}
                                            text={
                                                [
                                                    "The People Who Creates & Builds Things",
                                                    "Creator",
                                                    "Designer",
                                                    "Developer",
                                                    "Product Manager",
                                                    "Artist",
                                                ]
                                            }
                                            cursor={<strong> _ </strong>}
                                        />]}
                                    />
                                    <Description
                                            description="MOST PEOPLE VALUE THE RESULTS. WHERE We value the process, consistency, persistence and SHARED EXPERIENCE"
                                    />
                                </div>
                            </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__two">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                            <Container>
                                <div className="section__two-wrapper">
                                    <Description description={["We ❤ ", <br/>, <TypingEffect
                                                speed={50}
                                                typingDelay={100}
                                                eraseDelay={1000}
                                                text={
                                                    [
                                                        "1 on 1 Talk",
                                                        "productivity",
                                                        "books",
                                                        "Code",
                                                        "Design",
                                                        "Arts",
                                                        "Music",
                                                        "Psychology",
                                                        "Philosophy",
                                                        "learning",
                                                        "writing"
                                                    ]
                                                }
                                                cursor={<strong> _ </strong>}
                                            />]}
                                    />
                                </div>
                            </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__eight">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                            <Container>
                                  <div className="section__eight-wrapper">
                                        <Description description={"Chance to meet your future"}/>
                                        <Description description={"Team, Partner, Mentor"}/>
                                  </div>
                            </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__three heading">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                            <Container>
                                <div className="section__three-wrapper">
                                    <div className="section__three-item">
                                        <Description description={[<strong>FOR YOU</strong>]}/>
                                    </div>
                                    <div className="section__three-item">
                                        <TypingEffect
                                            speed={50}
                                            typingDelay={100}
                                            eraseDelay={500}
                                            text={
                                                [
                                                    "WHO struggle to get things done and want a place to focus.",
                                                    "WHO DIFFICULT TO GET RID FROM SCROLLING & CONSUMing INFORMATION ENDLESSLY EVERY DAY.",
                                                    "WHO hard to find a partner to work with and want to be surrounded by passionate minds."
                                                ]
                                            }
                                            cursor={<strong> _ </strong>}
                                        />
                                    </div>
                                </div>
                            </Container>
                        </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__four heading">
                        <ScrollAnimation  animateIn="fadeInUp" animateOut="fadeOutUp">
                        <Container>
                            <Description
                        description={
                        [
                            "Not having an accountable partner to help a person accomplish their goals is one reason of 92% of people did not accomplish their New Year's resolution.",
                        ]
                    }/>
                    <Description description="According to a University of Scranton study by Dan Diamond in Forbes and an article by Dale Tyson"/>
                    </Container>
                        </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__six heading">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                        <Container>
                           <div className="section__four-wrapper">
                            <div className="section__four-item-description">
                                <Description
                                    description="WHAT WE DO"
                                    blockArea="description__wrapper-text"
                                />
                            </div>
                            <div className="section__four-lists">
                                <div className="section__four-items">
                                    {
                                        cards.map(card => (
                                            <Card
                                                key={card.id}
                                                imageUrl={Icon}
                                                alt="closa-svg"
                                                heading={card.heading}
                                                description={card.description}
                                                isFeature={true}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                           </div>
                        </Container>
                        </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__five heading">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                    <Container>
                           <div className="section__five-wrapper">
                           <Description
                                description="Your Place To Do What Matters"
                            />
                            <Description
                                description="our community HELPS you build the right habits. REMOVE DISTRACTION. meet interesting people. and BE 1% BETTER EVERY day."
                                
                            >
                            <form onSubmit={(id) => submitRef(id)}>
                                <div className="form__wrapper">
                                    <div className="form__label">
                                        <Label text="ENTER THE REFERRAL CODE"/>
                                    </div>
                                    <div className="form__controller">
                                        <Input 
                                                    placeholder="#" 
                                                    change={(e) => changeRef(e)}
                                                    value={refValue.length > 0 ? `#${removeDuplicateCharacter(refValue)}` : ""}
                                                />
                                                {
                                                    isRefError === true ? <Warning message={errorMessage} classValue="warning-text"/> : false
                                                }
                                        <Button 
                                            text="Apply"
                                            type="submit"
                                        />
                                        <p className="button__description" style={ { bottom : isRefError === true ? -75 + "%" : -50 + "%" } }>
                                            We are invite-only community
                                        </p>
                                    </div>
                                </div>
                            </form>
                            </Description>
                           </div>
                    </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__seven heading">
                    <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
                        <Container>
                           <div className="section__seven-wrapper">
                                <Card
                                        heading="We still early. Join us. Do what matters."
                                        description="Join the waitlist"
                                    />
                           </div>
                        </Container>
                    </ScrollAnimation>
                </SectionComponent>
                <SectionComponent className="section__nine heading">
                    <Container>
                        <div className="tagline">
                            <div className="tagline__wrapper">
                                <div className="tagline__item figure">
                                    <img src={ClosaLogo} alt="closa__figure"/>
                                </div>
                                <div className="tagline__item description">
                                    <p>
                                        A habit-forming community where you get things done, meet interesting people, and do what matters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </SectionComponent>
            </div >
        </div>
    )
}

export default Home;