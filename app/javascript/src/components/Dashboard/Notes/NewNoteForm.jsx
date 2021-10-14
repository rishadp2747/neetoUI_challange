import React from "react";

import { Button, Input, Textarea } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import * as yup from "yup";

export default function NewNoteForm({ onClose }) {
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
      <Form>
        <Input label="Title" name="title" className="mb-6" />
        <Textarea label="Description" name="description" rows={8} />
        <div className="nui-pane__footer nui-pane__footer--absolute">
          <Button
            onClick={onClose}
            label="Cancel"
            size="large"
            style="secondary"
          />

          <Button
            type="submit"
            label="Submit"
            size="large"
            style="primary"
            className="ml-2"
          />
        </div>
      </Form>
    </Formik>
  );
}
