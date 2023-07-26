import { Community } from "../Community";
import { Friends } from "../Friends";
import styles from "./Profile.module.css";
import IconImage from "../../assets/images/profileIcon.svg"; 

export const Profile = () => {
    return (
        <section className="mainContainer">
            <section className="profileDisplayContainer">
                <div className="imageContainer">
                    <img src={IconImage}></img>
                </div>
                <div className="userStatusContainer">
                    <span className="userName"></span>
                    <span className="userExtras"></span>
                </div>
            </section>
            
            <button className="editProfileBtn"></button>

            <section className="profileInfoContainer">
                <span className="greetingsText"></span>
            </section>

            <section className="rightSideContainer">
                <Friends />
                <Community />
            </section>
        </section>
        
    );
}