import React from "react";

import { Input, Textarea, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";

import formInitialValues from "constants/formInitialValues";
import formValidationSchemas from "constants/formValidationSchemas";

import { CONTACT_OPTIONS, TAGS_OPTIONS } from "./constants";

const NewNoteForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={formInitialValues.noteForm}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.noteForm}
    >
      <Form className="space-y-4">
        <Input label="Title" placeholder="Enter Title" required />
        <Textarea
          label="Description"
          placeholder="Enter note description"
          name="description"
          rows={1}
          required
        />
        <Select
          required
          isSearchable
          label="Assigned Contact"
          name="assignedContact"
          options={CONTACT_OPTIONS}
          placeholder="Select Role"
        />
        <Select
          isSearchable
          required
          label="Tags"
          name="tags"
          options={TAGS_OPTIONS}
          placeholder="Select Role"
        />
      </Form>
    </Formik>
  );
};
export default NewNoteForm;
