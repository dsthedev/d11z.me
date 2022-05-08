-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" REAL NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "name" TEXT,
    "type" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "modifiers" TEXT,
    "unit" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Rate" ("createdAt", "currency", "description", "id", "material", "name", "type", "unit", "updatedAt", "value") SELECT "createdAt", "currency", "description", "id", "material", "name", "type", "unit", "updatedAt", "value" FROM "Rate";
DROP TABLE "Rate";
ALTER TABLE "new_Rate" RENAME TO "Rate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
