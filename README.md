We will begin by fetching data from our db.json
  =>This is done using setEffect(It takes two arguments that is {a callback function and an empty array})


Next we will need to display our data in the browser
  =>In this case we will need to use map

Now we will have to display our data in a table form

We will create an input form where we will be searching the recent transactions 
Next we will also create a form input that will hold the :
                                                          Date
                                                          Description
                                                          Category
                                                          Ammount

From there ,we will also have a button named add transaction.The main role of this button will be submitting the the transaction added to the backend and also adding the transaction to the table displayed in the browser.For this to occur we have to fetch and use the "POST" method 