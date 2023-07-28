import { Community } from "../Community";
import { Friends } from "../Friends";
import styles from "./Profile.module.css";
import IconImage from "../../assets/images/profileIcon.svg";
import { ProfileInfo } from "../ProfileInfo";

export const Profile = () => {
    return (
        <section className="mainContainer">
            <section className="profileInfoContainer">
                <ProfileInfo />
            </section>

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

            <section className="rightSideContainer">
                <div className="friendsContainer">
                    <Friends />
                </div>

                <div className="communityContainer">
                    <Community />
                </div>
            </section>
