CREATE TABLE [dbo].[PurchaseOrder]
(
  [transID] INT NOT NULL PRIMARY KEY
, [userID] INT NOT NULL
, [orderTotal] FLOAT NOT NULL
, [orderDate] DATE NOT NULL
, [orderStatus] NVARCHAR(50) NOT NULL
, [orderAddress] NVARCHAR(50) NOT NULL
, [orderTotal] FLOAT NOT NULL
)
