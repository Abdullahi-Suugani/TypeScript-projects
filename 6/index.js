"use strict";
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log("SuperAdmin can edit:", canEdit(UserRole.SuperAdmin));
console.log("Moderator can edit:", canEdit(UserRole.Moderator));
console.log("Viewer can edit:", canEdit(UserRole.Viewer));
