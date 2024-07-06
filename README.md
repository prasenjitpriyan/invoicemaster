# Frontend Mentor - Invoice app

## Welcome! 👋

Thanks for purchasing this premium Frontend Mentor coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects. These premium challenges are perfect portfolio pieces, so please feel free to use what you create in your portfolio to show others.

**To do this challenge, you need a strong understanding of HTML, CSS, and JavaScript.**

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Links

- Solution URL: (https://github.com/dmitinev/invoice_app)
- Live Site URL: (https://dmitinev.github.io/invoice_app/)

## The challenge

Your challenge is to build out this invoicing application and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data in a local `data.json` file, so use that to populate the content on first load. If you want to take it up a notch, feel free to build this as a full-stack application!

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

### Expected Behaviour

- Creating an invoice
  - When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Users should receive a confirmation modal when trying to delete invoices.
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.

## My process

### Built with

- SASS preprocessor
- Flexbox
- CSS Grid
- Mobile-first workflow
- CSS Modules
- [React](https://reactjs.org/) - JS library
- [VITE](https://vitejs.dev/) - Vite React+TS Template
- [React-router](https://reactrouter.com/en/main) - React router
- [ReduxJS](https://redux.js.org/) - ReduxJS
- [Redux-persist](https://github.com/rt2zz/redux-persist) - Redux persist
- [Formik](https://formik.org/) - Formik + [YUP](https://github.com/jquense/yup) as a validation schema for Formik 
- [Framer motion](https://www.framer.com/motion/) - Framer Motion library



