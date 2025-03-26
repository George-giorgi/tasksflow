-- CreateTable
CREATE TABLE "Task" (
    "id" UUID NOT NULL,
    "partNumber" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "descriptionFromEmployee" TEXT NOT NULL,
    "metalType" TEXT NOT NULL,
    "drawing" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
