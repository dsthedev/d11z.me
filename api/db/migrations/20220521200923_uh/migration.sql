-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "name" TEXT DEFAULT '',
    "roles" TEXT NOT NULL DEFAULT 'guest',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "roles", "salt", "updatedAt") SELECT "createdAt", "email", "hashedPassword", "id", "name", "resetToken", "resetTokenExpiresAt", "roles", "salt", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
