import React from 'react'
import "./RequestQuotation.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RequestQuotation = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: Yup.string()
            .required("Phone Number is required")
            .matches(/^\d+$/, "Phone Number must be digits only"),
        needHelpWith: Yup.string().required("Please select an option"),
        whatCanWeDo: Yup.array().min(1, "Select at least one option"),
        budget: Yup.string().required("Budget is required"),
    });

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        website: "",
        companyName: "",
        additionalComments: "",
        needHelpWith: [],
        whatCanWeDo: [],
        budget: "",
    };

    const options = {
        needHelpWith: [
            "Creating a New Brand",
            "Building and Growing a Stronger Brand",
            "Building a New Website",
            "Improving my Website & Online experience",
            "Growing My Business",
            "Gaining more leads & customers",
            "Increasing revenue & Profit",
            "All of the Above",
            "Others",
        ],
        whatCanWeDo: [
            "Branding",
            "Brand Strategy & Growth",
            "Web Design & Development",
            "Web Support",
            "Marketing & Advertising",
            "Sales Enablement",
            "Hosting, Domains & Web Services",
            "Other",
        ],
        budget: [
            "$0 - $1,000",
            "$1,000 - $10,000",
            "$10,000 - $25,000",
            "$25,000 - $75,000",
            "$75,000+",
        ],
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const response = await fetch('http://localhost:5000/api/quotation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
    
            if (response.ok) {
                alert("Quotation submitted successfully!");
                resetForm();
            } else {
                alert("Failed to submit quotation.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("An error occurred while submitting the form.");
        }
    };
    
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='mb-lg-5'>
                            <div className='mt-lg-5 mt-md-3 mt-2'>
                                <h2 className='request_a_quote_h2'>Request a Quote</h2>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <h4 className='elevonix_contact_h4'>+92 319 4766752</h4>
                                <div className='dark_brown_divider mx-3'></div>
                                <h4 className='elevonix_contact_h4'>elevonixtech@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <div className='contact_form_box mb-5'>
                            <p className='contact_form_p'>Complete our form and receive a free quote on how we can help brand, build and grow your business.</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form>
                                <div className="row mb-3">
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>First Name <span className='text-danger'>*</span></label>
                                        <Field name="firstName" className="form-control" />
                                        <ErrorMessage name="firstName" component="div" className="text-danger error_message" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>Last Name <span className='text-danger'>*</span></label>
                                        <Field name="lastName" className="form-control" />
                                        <ErrorMessage name="lastName" component="div" className="text-danger error_message" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>Email <span className='text-danger'>*</span></label>
                                        <Field name="email" className="form-control" />
                                        <ErrorMessage name="email" component="div" className="text-danger error_message" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>Phone Number <span className='text-danger'>*</span></label>
                                        <Field name="phoneNumber" className="form-control" />
                                        <ErrorMessage name="phoneNumber" component="div" className="text-danger error_message" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>Website URL</label>
                                        <Field name="website" className="form-control" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label className='fields_label_text'>Company Name</label>
                                        <Field name="companyName" className="form-control" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-12 col-md-12">
                                        <label className='fields_label_text'>I need help with <span className='text-danger'>*</span></label>
                                        <Field
                                            as="select"
                                            name="needHelpWith"
                                            className="form-control"
                                        >
                                            <option value="" disabled>
                                                -- Select an option --
                                            </option>
                                            {options.needHelpWith.map((option, idx) => (
                                                <option key={idx} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="needHelpWith" component="div" className="text-danger error_message" />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col-lg-12 col-md-12">
                                        <label className='fields_label_text'>What can we do for you? <span className='text-danger'>*</span></label>
                                        <p className='check_all_span mb-2'>Check all that apply</p>
                                        <div>
                                            {options.whatCanWeDo.map((option, idx) => (
                                                <div key={idx} className="form-check">
                                                    <Field
                                                        type="checkbox"
                                                        name="whatCanWeDo"
                                                        value={option}
                                                        className="form-check-input"
                                                    />
                                                    <label className="form-check-label">{option}</label>
                                                </div>
                                            ))}
                                        </div>
                                        <ErrorMessage name="whatCanWeDo" component="div" className="text-danger error_message" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-12 col-md-12">
                                        <label className='fields_label_text'>Additional Comments</label>
                                        <Field
                                            as="textarea"
                                            name="additionalComments"
                                            className="form-control"
                                            rows="3"
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-lg-12 col-md-12">
                                        <label className='fields_label_text'>What is your estimated budget? <span className='text-danger'>*</span></label>
                                        <div>
                                            {options.budget.map((option, idx) => (
                                                <div key={idx} className="form-check">
                                                    <Field
                                                        type="radio"
                                                        name="budget"
                                                        value={option}
                                                        className="form-check-input"
                                                    />
                                                    <label className="form-check-label">{option}</label>
                                                </div>
                                            ))}
                                        </div>
                                        <ErrorMessage name="budget" component="div" className="text-danger error_message" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <div className='d-flex justify-content-center'>
                                    <div class="actions mt-4">
                                <div data-sal="slide-left" data-sal-delay="900" data-sal-easing="easeInCubic">
                                    <button type='submit' class="button hero__button">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    </div>
                    </div>
                    <div className='col-lg-2 '></div>
                    
                </div>
            </div>
        </div>
    )
}

export default RequestQuotation
