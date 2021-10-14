import { CONTACTS } from "components/Dashboard/constants";

const TAGS = ["Getting Started", "Onboarding", "User Flow", "UX", "Bugs", "V2"];

export const NOTES_DATA = [
  {
    title: "How to claim warranty?",
    body: `"Are you getting my text???" She texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    status: "Created"
  },
  {
    title: "How to claim warranty?",
    body: `"Are you getting my text???" She texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    status: "Drafted"
  },
  {
    title: "How to claim warranty?",
    body: `"Are you getting my text???" She texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    status: "Drafted"
  }
];

export const CONTACT_OPTIONS = CONTACTS.map(val => {
  return {
    label: val.name,
    value: val.name.toLowerCase().split(" ").join("_")
  };
});

export const TAGS_OPTIONS = TAGS.map(val => {
  return {
    label: val,
    value: val.toLowerCase().split(" ").join("_")
  };
});
