const ROLES = ["Owner", "Admin", "User"];

export const ROLES_OPTIONS = ROLES.map(val => {
  return {
    label: val,
    value: val.toLowerCase().split(" ").join("_")
  };
});
