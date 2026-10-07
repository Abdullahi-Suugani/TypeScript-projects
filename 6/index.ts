enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log("SuperAdmin can edit:", canEdit(UserRole.SuperAdmin));

console.log("Moderator can edit:", canEdit(UserRole.Moderator));

console.log("Viewer can edit:", canEdit(UserRole.Viewer));
