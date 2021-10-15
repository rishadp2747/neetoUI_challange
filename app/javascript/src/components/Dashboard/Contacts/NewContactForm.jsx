import React from "react";

import { Input, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";

import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

import { ROLES_OPTIONS } from "./constants";

const NewNoteForm = () => {
  const handleSubmit = () => {
    //handle form submit
  };

  return (
    <Formik
      initialValues={formInitialValues.contactForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.contactForm}
    >
      <Form className="space-y-4">
        <div className="flex space-x-2">
          <Input label="First Name" placeholder="Enter first name" required />
          <Input label="Last Name" placeholder="Enter last name" required />
        </div>
        <Input
          label="Email Address"
          placeholder="Enter yout email address"
          required
        />

        <Select
          required
          isSearchable
          label="Roles"
          name="roles"
          options={ROLES_OPTIONS}
          placeholder="Select Role"
        />
      </Form>
    </Formik>
  );
};
export default NewNoteForm;
