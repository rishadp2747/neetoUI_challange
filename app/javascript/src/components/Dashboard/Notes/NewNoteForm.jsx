import React from "react";

import { Input, Textarea, Select } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import * as yup from "yup";

const TAGS = ["Getting Started", "Onboarding", "User Flow", "UX", "Bugs", "V2"];

const TAGS_OPTIONS = TAGS.map(val => {
  return {
    label: val,
    value: val.toLowerCase().split(" ").join("_")
  };
});

const NewNoteForm = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required")
      })}
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
          options={[
            {
              label: "Sam",
              value: "sam"
            },
            {
              label: "Raj",
              value: "raj"
            }
          ]}
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
