import { Field } from "redux-form";
import classes from "./ProfileData.module.css";
import facebook from "../../../../icons/socialNetworkIcons/facebook.png";
import website from "../../../../icons/socialNetworkIcons/website.png";
import vk from "../../../../icons/socialNetworkIcons/vk.png";
import twitter from "../../../../icons/socialNetworkIcons/twitter.png";
import instagram from "../../../../icons/socialNetworkIcons/instagram.png";
import youtube from "../../../../icons/socialNetworkIcons/youtube.png";
import github from "../../../../icons/socialNetworkIcons/github.png";
import mainLink from "../../../../icons/socialNetworkIcons/mainLink.png";
import { Input } from "../../../Common/FormsControls/FormsControls";
import { accuracyCheck } from "../../../../Utils/Validators/Validator";

const Contact = ({ contactTitle, contactValue, editMode, name }) => {
    const iconsSpace = {
        "facebook": facebook,
        "website": website,
        "vk": vk,
        "twitter": twitter,
        "instagram": instagram,
        "youtube": youtube,
        "github": github,
        "mainLink": mainLink
    }

    return (
        <div className={classes.contact}>
            {(editMode || contactValue) && <div className={classes.contactField}>
                <img src={iconsSpace[Object.keys(iconsSpace).filter(key => key === contactTitle)]} />
                <div className={classes.imgTitle}>{contactTitle}</div>
                {editMode ?
                    <Field placeholder={contactTitle} name={name} component={Input} 
                        validate={[accuracyCheck]} />
                    : <div className={classes.contactValue}>{contactValue}</div>}
            </div>}
        </div>
    )
}

export default Contact;