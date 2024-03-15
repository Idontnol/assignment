import {motion} from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import './index.css';


const Main=()=>{

    const websiteName="Mobishaala".split("");

    return(
        <>
    <div className='mainPageContainer'>
        <div className='mainPageLeft'>

            <motion.h1 className='header' initial={{opacity:0}} animate={{opacity:1}}>
                    <img src="mobi.png" alt="mobishaala" className="mobishaalaIcon" />
                    {websiteName.map((el,index)=>(
                     <motion.span key={index}
                     initial={{opacity:0}}
                     whileInView={{opacity:1}}
                     transition={{delay:index/8}}
                     >
                        {el}{""}</motion.span>
                    ))}
            </motion.h1>

                <p className='mainPageTagline'>Create your<span className='specialTag'> Digital Classroom</span> in 5 mins for <span className='specialTag'>FREE</span> and connect to 1+ Million students</p>
                <ul className="dotList">
                    <motion.li className="lis" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4}}> 
                      ● No technical knowledge required.</motion.li>
                    <motion.li className="lis" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6}}> 
                      ● Quickly setup live class tests, notes, ebooks and more.
                    </motion.li>
                    <motion.li className="lis" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8}}> 
                      ● Reach out to millions of students anywhere, anytime.
                    </motion.li>
                </ul>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_JjkRUlKGGQ?si=yKDXPXggG6eS-a2a" className='youtube-iframe-small'
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               <span className='gameChanger'>
                <label className='labelText'>Institute/Teacher</label>
                <a href="https://institute.mobishaala.com/" >
                    <motion.button className='getStartedBtn'  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}}>Get Started
                    </motion.button>
                </a>
                <label className='labelText'>Student</label>
                <a href="https://bit.ly/mobishaala">
                    <motion.button className='downloadBtn'  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7}}>Download App
                    </motion.button>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=919972968390&text=Hello%21+I+want+to+know+about+mobishaala.com%2C+my+name+is+&type=phone_number&app_absent=0" style={{textDecoration:'none'}}>
                    <motion.button className='talkToUsBtn'  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9}}>
                        <FaWhatsapp className='callIcon' />{" "}Talk to us
                    </motion.button>
                </a>
               </span>
                
            </div>
           
        <div className='mainPageRight'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jg5d59ligW4?si=qDyQYRnAVOzwMwvl" className='youtube-iframe'
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>
            <button className='buyBtn' >Buy</button>
        </div>
        
    </div>
    <div className="footer">
        <motion.span className='footer1' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4}}>
            <h1 className="footerHeader"><img src="mobi.png" alt="mobishaala" className="mobishaalaIcon" />Mobishaala</h1>
            <span className='footerInnerHeader extra'>Vision</span>
            <span className="">Empower Institutions & teachers with state of the art digital classroom technology</span>
        </motion.span>
        <motion.span className='footer2' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6}}>
            <span className='footerInnerHeader extra'>Address</span>
            <span className="address"> <span className='footer2-highlight'>Registered office:</span> 804,5th Cross 9th Main, 4th block Kormangala, Banglore, Karnataka 560034</span>
            <span> <span className='footer2-highlight'>Corporate office:</span> 293, Westend Marg, near Saket, saidulajab, Saket, New Delhi, 110030</span>
        </motion.span>
        <motion.span className='footer3' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8}}>
            <span className='footerInnerHeader'>Quick Links</span>
            <a href="https://www.facebook.com/mobishaala/"
            className="links"><span>Blog</span></a>
            <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=web_share"
            className="links"><span>Android App</span></a>
            <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=web_share"
            className="links"><span>IOS App</span></a>
        </motion.span>
        <motion.span className='footer4' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.0}}>
            <span className='footerInnerHeader'>Legal Stuff</span>
            <a href="https://www.facebook.com/mobishaala/"
                className="links"><span>Privacy Policy</span></a>
                <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=web_share"
                className="links"><span>Terms of Service</span></a>
                <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=web_share"
                className="links"><span>Refunds/Cancellations</span></a>
                <a href="https://play.google.com/store/apps/details?id=com.mobishaala.app&pcampaignid=web_share"
                className="links"><span>Disclaimer</span></a>
        </motion.span>
    </div>
    </>)
}

export default Main;