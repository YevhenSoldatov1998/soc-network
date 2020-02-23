import React from 'react'
import s from "../MyInfoItem.module.sass";
import Contacts from "../Contacts";
import {createField} from "../../../../../common/form/createField";
import ContactsForm from "./ContactsForm";
import {maxLength, minLength} from "../../../../../../utility/validation";
import {withFormControl} from "../../../../../../hoc/formControl";
import {Field} from "redux-form";

const minLength3 = minLength(3);
const Input = withFormControl('input');
const Textarea = withFormControl('textarea');

const ProfileDataForm = ({handleSubmit, error, userAPI: {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}}) => {
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Save Info &#10000;</button>
            {error && <div>
                <p><strong style={{color: 'red'}}>{error}</strong></p>
            </div>}
            <div className={s.name}><span>About me: </span>
                <Field name={"fullName"}
                       placeholder={'new name'}
                       component={Input}
                       validate={[minLength3]}

                />
            </div>
            < div><span>about me:</span>
                <Field name={"aboutMe"}
                       placeholder={'About yourself'}
                       component={Input}
                       validate={[minLength3]}

                />
                </div>
            <div>
                <span>looking for a job:</span>
                <Field name={"lookingForAJob"}
                       placeholder={'About yourself'}
                       component={'checkbox'}


                />
            </div>
            <div> <span>Job Description</span>
                <Field name={"lookingForAJobDescription"}
                       placeholder={'About yourself'}
                       component={Textarea}


                />
            </div>
                <div>Contacts: <ContactsForm contacts={contacts}/>
                </div>

        </form>
    )
}
export default ProfileDataForm
