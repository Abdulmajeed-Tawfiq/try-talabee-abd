import { Field, Formik, Form } from "formik";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import Layout from "../../Layout/app/Layout";
import { LoadingButton } from "../../Components/Utils/Loading/LoadingButton";
import { getInitialValues, getValidationSchema } from "./formUtils";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useGetProfile, useUpdateProfile } from "../../api/profile";
import Loading from "../../Components/Utils/Loading/Loading";
import TalabeeField from "../../Components/Utils/TalabeeField/TalabeeField";
import { useState } from "react";
import { GenderOption } from "../Auth/FormUtils";


function Profile() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfile({});
  const { mutate: updateProfile, isLoading: isUpdateLoading } = useUpdateProfile();
  const profileData = data?.data[0];
  const [gender, setGender] = useState();

  const handleSubmit = (values: any) => {
    console.log(values);
    const { password, ...restOfValues } = values;
    const dataToSend = { ...restOfValues, gender };
    console.log({ ...dataToSend });
    updateProfile({ ...dataToSend });
  };

  const handleCancel = () => {
    navigate('/');
  };
  const handleLogout = () => {
    navigate('/auth');
  };

  return (
    <Layout>
      <div className="profile pt-5 pb-5">
        <h1 className="text-center mb-3">{t(`Edit your`)} <span>{t("Profile")}</span></h1>
        {
          isLoading ? <Loading /> :
            <div className="profile_form" >
              <Formik
                initialValues={getInitialValues({ profileData })}
                validationSchema={getValidationSchema()}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form >
                    <div className="login_dev one_row_dev">
                      <TalabeeField name="first_name" placeholder={t('first_name')} />
                      <TalabeeField name="last_name" placeholder={t('last_name')} />
                    </div>
                    <div className="login_dev">
                      <TalabeeField name="email" placeholder={t('Email')} />
                    </div>

                    <div className="login_dev">
                      <TalabeeField name="phone" placeholder={t('Phone')} />
                    </div>

                    <div className="login_dev">
                      <TalabeeField name="password" inputType="password" placeholder={t('password')} />
                      {/* <Button>Change password</Button> */}
                    </div>
                    <div className="login_dev one_row_dev">
                      <span className="birthday_elements">
                        <label htmlFor="birthday" className="birthday_label">Birthday</label>
                        <Field id="birthday" name="birthday" className="birthday" type="date" value={formik.values.birthday} placeholder="Birthday" />
                      </span>

                      <TalabeeField type="Select" name="gender" className="gender-select" onChange={(gender) => setGender(gender)} option={GenderOption} placeholder="Gender" label="Gender" />
                    </div>
                    <div className="buttons">
                      <Button onClick={handleCancel} >{t("cancel")}</Button>
                      <LoadingButton isLoading={isUpdateLoading} type="submit">
                        {t("save")}
                      </LoadingButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
        }
      </div>
    </Layout>
  )
}

export default Profile;
