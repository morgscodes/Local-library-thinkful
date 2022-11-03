function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function findAccountById(account, id) {
  return account.find((account) => account.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const nonReturnedBooks = books.filter((book) => book.borrows[0].returned == false);
  const returnedBooks = books.filter((book) => book.borrows[0].returned == true);
  const result =[];
  result.push(nonReturnedBooks);
  result.push(returnedBooks);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const transactions = book.borrows;
  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });

  result.splice(10);

  return result;
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
