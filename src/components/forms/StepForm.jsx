import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Step1_FileUpload from "./steps/Step1_FileUpload";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";
import Step11 from "./steps/Step11";
import Step12 from "./steps/Step12";
import Step13 from "./steps/Step13";
import Step14 from "./steps/Step14";
import Step15 from "./steps/Step15";
import { BASE_URL } from "../../../env";

const StepForm = () => {
  const [step, setStep] = useState(0);

  const steps = [
    "FDD Upload",
    "Custom URL & Identification",
    "Email",
    "Phone",
    "Address",
    "Age",
    "Gender",
    "Education",
    "Experience",
    "Skills",
    "Languages",
    "Certifications",
    "LinkedIn",
    "Portfolio",
    "Summary",
  ];

  const isLastStep = step === steps.length - 1;

  const initialValues = {
    fddFile: null,
    flsNumber: "FLS-OPP-000001",
    customSlug: "",
    brandName: "",
    brandLogo: null,
    brandBanner: null,
    aboutUs: "",
    category: "",
    subcategory: "",
    businessModel: "",
    keywords: "",
    entityName: "",
    website: "",
    foundedDate: null,
    franchisingSince: null,
    corporatePhone: "",
    corporateLocations: 0,
    franchiseLocations: 0,
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    investmentLow: "",
    investmentHigh: "",
    franchiseFee: "",
    liquidCapital: "",
    thirdPartyFinancing: "",
    royaltyFee: "",
    marketingFee: "",
    localAdType: "",
    localAdAmount: "",
    localAdRequired: "",
    nationalAdType: "",
    nationalAdAmount: "",
    nationalAdRequired: "",
    spaceLow: "",
    spaceHigh: "",
    ownerOperatorRequired: "",
    absenteeOwnershipAllowed: "",
    staffRequirements: "",
    operationalHours: "",
    trainingHours: "",
    trainingLocation: "",
    trainingDescription: "",
    ongoingSupport: "",
    territoryProtection: "",
    internationalOpportunities: "",
    opportunityTypes: "",
    trademarkStatus: "",
    trademarkNumber: "",
    financialDisclosure: "",
    financialDetails: "",
    brokerReferrals: "",
    brokerCommission: "",
    commissionType: "",
    minCommission: "",
    maxCommission: "",
    brokerProgramDetails: "",
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    youtubeUrl: "",
    brandVideoUrl: "",
    testimonialVideoUrl: "",
    pressMentions: "",
    galleryImages: null,
    marketingBrochure: null,
    leadEmail: "",
    calendlyUrl: "",
    responseTime: "",

    //============
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    gender: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    certifications: "",
    linkedin: "",
    portfolio: "",
    summary: "",
  };

  const validationSchemas = [
    // Step 1: FDD Upload
    Yup.object({ fddFile: Yup.mixed().nullable() }),

    // Step 2: Custom URL and Identification
    Yup.object({
      customSlug: Yup.string()
        .matches(
          /^[a-z0-9\-]+$/,
          "Only lowercase letters, numbers, and hyphens allowed"
        )
        .required("Custom URL Slug is required"),
    }),

    // Step 3
    Yup.object({
      brandName: Yup.string().required("Brand name is required"),
      brandLogo: Yup.mixed().required("Brand logo is required"),
      brandBanner: Yup.mixed().required("Brand banner is required"),
    }),

    // step 4
    Yup.object({
      aboutUs: Yup.string()
        .min(200, "Minimum 200 characters")
        .max(2000, "Maximum 2000 characters")
        .required("About Us is required"),
      category: Yup.string().required("Category is required"),
      subcategory: Yup.string().required("Subcategory is required"),
      businessModel: Yup.string().required("Business Model is required"),
      keywords: Yup.string().required("Keywords are required"),
    }),

    // step 5
    Yup.object({
      entityName: Yup.string().required("Entity name is required"),
      website: Yup.string().url("Invalid URL").required("Website is required"),
      foundedDate: Yup.date().required("Founded Date is required"),
      franchisingSince: Yup.date().required("Franchising Date is required"),
      corporatePhone: Yup.string().required("Phone is required"),
      corporateLocations: Yup.number().min(0).required(),
      franchiseLocations: Yup.number().min(0).required(),
      streetAddress: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zipCode: Yup.string().required(),
    }),

    // step 6
    Yup.object({
      investmentLow: Yup.number().required("Required"),
      investmentHigh: Yup.number().required("Required"),
      franchiseFee: Yup.number().required("Required"),
      liquidCapital: Yup.number().required("Required"),
      thirdPartyFinancing: Yup.string().required("Required"),
      royaltyFee: Yup.number().required("Required"),
      marketingFee: Yup.number().required("Required"),
      localAdType: Yup.string().required("Required"),
      localAdAmount: Yup.number().required("Required"),
      localAdRequired: Yup.string().required("Required"),
      nationalAdType: Yup.string().required("Required"),
      nationalAdAmount: Yup.number().required("Required"),
      nationalAdRequired: Yup.string().required("Required"),
    }),

    // step 7
    Yup.object({
      spaceLow: Yup.number().required("Required"),
      spaceHigh: Yup.number().required("Required"),
      ownerOperatorRequired: Yup.string().required("Required"),
      absenteeOwnershipAllowed: Yup.string().required("Required"),
      staffRequirements: Yup.string().required("Required"),
      operationalHours: Yup.string().required("Required"),
    }),

    // step 8
    Yup.object({
      trainingHours: Yup.number().required("Required"),
      trainingLocation: Yup.string().required("Required"),
      trainingDescription: Yup.string().required("Required"),
      ongoingSupport: Yup.string().required("Required"),
    }),

    // step 9
    Yup.object({
      territoryProtection: Yup.string().required("Required"),
      internationalOpportunities: Yup.string().required("Required"),
      opportunityTypes: Yup.string().required("Required"),
    }),

    // step 10
    Yup.object({
      trademarkStatus: Yup.string().required("Required"),
      trademarkNumber: Yup.string().when("trademarkStatus", {
        is: (val) => val === "registered" || val === "pending",
        then: (schema) => schema.required("Required"),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),

    // step 11
    Yup.object({
      financialDisclosure: Yup.string().required("Required"),
      financialDetails: Yup.string().when("financialDisclosure", {
        is: "yes",
        then: (schema) =>
          schema.required("Details required if 'Yes' is selected."),
        otherwise: (schema) => schema.notRequired(),
      }),
    }),

    // step 12
    Yup.object({
      brokerReferrals: Yup.string().required("Required"),
      brokerCommission: Yup.number()
        .min(0, "Must be positive")
        .max(100, "Must be under 100")
        .required("Required"),
      commissionType: Yup.string().required("Required"),
      minCommission: Yup.number().required("Required"),
      maxCommission: Yup.number().required("Required"),
      brokerProgramDetails: Yup.string().required("Required"),
    }),

    // step 13
    Yup.object({
      facebookUrl: Yup.string().url("Invalid URL"),
      instagramUrl: Yup.string().url("Invalid URL"),
      twitterUrl: Yup.string().url("Invalid URL"),
      linkedinUrl: Yup.string().url("Invalid URL"),
      youtubeUrl: Yup.string().url("Invalid URL"),
    }),

    // step 14
    Yup.object({
      brandVideoUrl: Yup.string().url("Invalid URL").nullable(),
      testimonialVideoUrl: Yup.string().url("Invalid URL").nullable(),
      pressMentions: Yup.string().nullable(),
      galleryImages: Yup.mixed().nullable(),
      marketingBrochure: Yup.mixed().nullable(),
    }),

    // step 15
    Yup.object({
      leadEmail: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      calendlyUrl: Yup.string()
        .url("Invalid URL")
        .required("Calendly URL is required"),
      responseTime: Yup.string().required("Response time is required"),
    }),

    Yup.object({ email: Yup.string().email().required("Email is required") }),
    Yup.object({ phone: Yup.string().required("Phone is required") }),
    Yup.object({ address: Yup.string().required("Address is required") }),
    Yup.object({ age: Yup.number().required("Age is required") }),
    Yup.object({ gender: Yup.string().required("Gender is required") }),
    Yup.object({ education: Yup.string().required("Education is required") }),
    Yup.object({ experience: Yup.string().required("Experience is required") }),
    Yup.object({ skills: Yup.string().required("Skills are required") }),
    Yup.object({ languages: Yup.string().required("Languages are required") }),
    Yup.object({
      certifications: Yup.string().required("Certifications are required"),
    }),
    Yup.object({
      linkedin: Yup.string()
        .url("Invalid URL")
        .required("LinkedIn is required"),
    }),
    Yup.object({
      portfolio: Yup.string()
        .url("Invalid URL")
        .required("Portfolio is required"),
    }),
    Yup.object({ summary: Yup.string().required("Summary is required") }),
  ];

  const renderStep = (formik) => {
    const fieldNames = Object.keys(initialValues);
    const field = fieldNames[step];

    // Step 1: FDD Upload
    if (step === 0) {
      return (
        <Step1_FileUpload
          formik={formik}
          onSkip={() => setStep((prev) => prev + 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 2: custom URL and indentification
    if (step === 1) {
      return (
        <Step2
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 3

    if (step === 2) {
      return (
        <Step3
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 4

    if (step === 3) {
      return (
        <Step4
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    //step 5
    if (step === 4) {
      return (
        <Step5
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 6
    if (step === 5) {
      return (
        <Step6
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 7
    if (step === 6) {
      return (
        <Step7
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 8
    if (step === 7) {
      return (
        <Step8
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 9
    if (step === 8) {
      return (
        <Step9
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 10
    if (step === 9) {
      return (
        <Step10
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 11
    if (step === 10) {
      return (
        <Step11
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 12
    if (step === 11) {
      return (
        <Step12
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 13
    if (step === 12) {
      return (
        <Step13
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 14
    if (step === 13) {
      return (
        <Step14
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={() => setStep((prev) => prev + 1)}
        />
      );
    }

    // step 15
    if (step === 14) {
      return (
        <Step15
          formik={formik}
          onBack={() => setStep((prev) => prev - 1)}
          onNext={formik.handleSubmit}
        />
      );
    }

    // Steps 2 to 15
    return (
      <div>
        <label className="block font-semibold mb-2">{steps[step]}</label>
        <Field
          as={field === "summary" ? "textarea" : "input"}
          type="text"
          name={field}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <ErrorMessage
          name={field}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    );
  };

  const handleSubmit = async (values, actions) => {
    if (!isLastStep) {
      setStep((prev) => prev + 1);
      return;
    }

    try {
      const formData = new FormData();

      // ✅ Append files if present
      if (values.fddFile) formData.append("fddFile", values.fddFile);
      if (values.brandLogo) formData.append("brandLogo", values.brandLogo);
      if (values.brandBanner)
        formData.append("brandBanner", values.brandBanner);
      if (values.marketingBrochure)
        formData.append("marketingBrochure", values.marketingBrochure);

      // ✅ Append gallery images (can be multiple)
      if (values.galleryImages && Array.isArray(values.galleryImages)) {
        values.galleryImages.forEach((img) =>
          formData.append("galleryImages", img)
        );
      }

      // ✅ Append the rest of the data as a JSON string
      const nonFileFields = { ...values };

      delete nonFileFields.fddFile;
      delete nonFileFields.brandLogo;
      delete nonFileFields.brandBanner;
      delete nonFileFields.marketingBrochure;
      delete nonFileFields.galleryImages;

      formData.append("formData", JSON.stringify(nonFileFields));

      const res = await axios.post(`${BASE_URL}/api/submit-form`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Form submitted successfully!");
      console.log(res.data);
      // actions.resetForm();
      // setStep(0);
    } catch (err) {
      console.error("Submit error:", err);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Step {step + 1}: {steps[step]}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemas[step]}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            {renderStep(formik)}

            {/* Buttons (except on Step 0 because handled in custom component) */}
            {step > 0 && (
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded"
                >
                  {isLastStep ? "Submit" : "Next"}
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepForm;
