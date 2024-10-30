-- CreateTable
CREATE TABLE "Invented_festivities" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dayFest" INTEGER NOT NULL,
    "monthFest" TEXT NOT NULL,
    "beginCountry" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invented_festivities_pkey" PRIMARY KEY ("id")
);
