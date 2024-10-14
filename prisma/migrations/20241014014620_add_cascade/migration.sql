-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_productId_fkey`;

-- DropForeignKey
ALTER TABLE `transactionproduct` DROP FOREIGN KEY `TransactionProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `transactionproduct` DROP FOREIGN KEY `TransactionProduct_transactionId_fkey`;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransactionProduct` ADD CONSTRAINT `TransactionProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransactionProduct` ADD CONSTRAINT `TransactionProduct_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
