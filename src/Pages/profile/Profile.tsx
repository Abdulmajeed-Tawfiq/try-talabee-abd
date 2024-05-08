import { Field, Formik } from "formik";
import { toast } from "react-toastify";
import { Button, Form } from "react-bootstrap";
import Layout from "../../Layout/app/Layout";
import { LoadingButton } from "../../Components/Utils/Loading/LoadingButton";
import { getInitialValues, getValidationSchema } from "./formUtils";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Profile() {


  const navigate = useNavigate();
  const { t } = useTranslation();


  const handleSubmit = () => {
    toast.success("Profile updated successfully");
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
        <div className="profile_form" >
          <Formik
            initialValues={getInitialValues()}
            validationSchema={getValidationSchema()}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">{t("Name")}</label>
                <Field id="name" placeholder="Please enter your name" name="name" />
                {formik.errors.name && formik.touched.name && (
                  <div className="text-danger mb-3">{formik.errors.name}</div>
                )}

                <label htmlFor="email">{t("email")}</label>
                <Field
                  id="email"
                  name="email"
                  placeholder="please enter yoyr E-mail"
                  type="email"
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="text-danger mb-3">{formik.errors.email}</div>
                )}

                <label htmlFor="phone">{t("Phone")}</label>
                <Field
                  id="phone"
                  name="phone"
                  placeholder="please enter your phone number"
                  type="text"
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-danger mb-3">{formik.errors.phone}</div>
                )}

                <label htmlFor="country">{t("Country")}</label>
                <Field
                  id="country"
                  name="country"
                  placeholder="please enter your country"
                  type="text"
                />
                {formik.errors.country && formik.touched.country && (
                  <div className="text-danger mb-3">{formik.errors.country}</div>
                )}
                <label htmlFor="password">{t("Password")}</label>
                <Field
                  id="password"
                  name="password"
                  placeholder="please enter your password"
                  type="password"
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="text-danger mb-3">{formik.errors.password}</div>
                )}
                <div className="logout">
                  <Button onClick={handleLogout} >{t("Logout")}</Button>
                </div>
                <div className="buttons">
                  <Button onClick={handleCancel} >{t("cancel")}</Button>
                  <LoadingButton type="submit">{t("update")}</LoadingButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

export default Profile;
