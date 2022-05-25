-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT E'',
    "salt" TEXT NOT NULL DEFAULT E'',
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "roles" TEXT NOT NULL DEFAULT E'guest',
    "name" TEXT DEFAULT E'',
    "displayName" TEXT DEFAULT E'',
    "firstName" TEXT DEFAULT E'',
    "lastName" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "wpId" INTEGER,
    "authorId" INTEGER DEFAULT 1,
    "parentId" INTEGER DEFAULT 0,
    "postType" TEXT NOT NULL DEFAULT E'post',
    "isSticky" BOOLEAN NOT NULL DEFAULT false,
    "pStatus" TEXT NOT NULL DEFAULT E'publish',
    "title" TEXT NOT NULL,
    "slug" TEXT DEFAULT E'',
    "body" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Taxonomy" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "type" TEXT NOT NULL DEFAULT E'tag',
    "description" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Taxonomy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL DEFAULT E'#',
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT DEFAULT E'',
    "isSticky" BOOLEAN NOT NULL DEFAULT false,
    "keywords" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clew" (
    "id" SERIAL NOT NULL,
    "for" TEXT NOT NULL DEFAULT E'',
    "username" TEXT DEFAULT E'',
    "email" TEXT DEFAULT E'',
    "hint" TEXT NOT NULL DEFAULT E'',
    "symbols" TEXT DEFAULT E'',
    "context" TEXT DEFAULT E'',
    "loginURL" TEXT DEFAULT E'',
    "licenseKey" TEXT DEFAULT E'',
    "notes" TEXT DEFAULT E'',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clew_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
