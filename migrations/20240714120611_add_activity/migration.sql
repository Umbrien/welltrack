-- CreateTable
CREATE TABLE "PhysicalActivityAnalysis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "meals" INTEGER NOT NULL,
    "physicalActivity" INTEGER NOT NULL,
    "hydration" INTEGER NOT NULL,
    "advices" TEXT NOT NULL,
    CONSTRAINT "PhysicalActivityAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MentalActivityAnalysis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "mindfulness" INTEGER NOT NULL,
    "mood" INTEGER NOT NULL,
    "stress" INTEGER NOT NULL,
    "advices" TEXT NOT NULL,
    CONSTRAINT "MentalActivityAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PhysicalActivityAnalysis_userId_date_key" ON "PhysicalActivityAnalysis"("userId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "MentalActivityAnalysis_userId_date_key" ON "MentalActivityAnalysis"("userId", "date");
