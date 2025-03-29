-- CreateTable
CREATE TABLE "TaskSession" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "clockIn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clockOut" TIMESTAMP(3),

    CONSTRAINT "TaskSession_pkey" PRIMARY KEY ("id")
);
