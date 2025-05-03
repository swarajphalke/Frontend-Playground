import { Formik } from "formik";
import { useFormik } from "formik";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <>
      <h2>Formik Library</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Enter Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default FormikForm;
