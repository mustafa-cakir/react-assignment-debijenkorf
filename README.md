
## de Bijenkorf Frontend Dev assignment
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

---

### State Management

-   `redux` has been used to manage the global-level or screen-level states
-   `useState` has been used in various components to keep the state closer to where is actually being used

---

### Folder Structure

-   `src/app` Global app setup and configurations used by the entire app are defined in the app folder (slices - reducer and actions -, store, routes, types and app container)
-   `src/features` Feature-specific components, Slice (Redux reducer logic and associated actions — [Redux Toolkit](#https://redux-toolkit.js.org/)), APIs, and styles are placed in the features' folder.
-   `src/common` Re-usable helpers/utils, shared components, hooks, etc. are defined in the common folder
-   `src/assets` Static assets like images, files, icons are placed in the assets' directory (global stylesheet, mixins, colors and custom UI-kit)
-   `src/screens` Includes the screen container of the page/routes

fyi: The `feature folder structure` is recommended by the [Redux style guide](#https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic). By using Redux Toolkit, it is now possible to avoid boilerplate code like actions and reducers.


### Tests

-   npm package `msw` has been used to mock the API requests
-   React Testing Library has been used to run the unit and integration tests


---

### Test Summary


    Test Suites: 12 passed, 12 total
    Tests:       30 passed, 30 total
    Snapshots:   0 total
    Time:        1.168 s

---

### Test Cases

`[PASS]  src/features/Search/SearchDropdown/SuggestionItem/__tests__/SuggestionItem.spec.tsx`
- Suggestion Item Component
  - ✓ should render the component with provided suggestion data (13 ms)
  - ✓ should highlight the item if there is match with the keyword (4 ms)

`[PASS]  src/screens/Homepage/__tests__/Homepage.spec.tsx`
- Homepage Screen
  - ✓ should render homepage screen without any error (17 ms)

`[PASS]  src/app/App.spec.tsx`
- App
  - ✓ should render app without any error (17 ms)

`[PASS]  src/features/Search/SearchInput/__tests__/SearchInput.spec.tsx`
- Search Input Component
  - ✓ should render the component properly (14 ms)
  - ✓ should should display the entered text in the input (8 ms)
  - ✓ should display the keyword from store as default value (5 ms)
  - ✓ should clicking the clear button clear the input field (5 ms)

`[PASS]  src/features/Search/SearchDropdown/__tests__/SearchDropdown.spec.tsx`
- Search Dropdown Component
  - ✓ should hide component if isShowDropdown is false (10 ms)
  - ✓ should hide component if keyword is empty (3 ms)
  - ✓ should hide component if keyword is less than 2 letters (1 ms)
  - ✓ should display shimmer loading if state is loading (10 ms)
  - ✓ should render suggestions if the suggestions data is present (4 ms)

`[PASS]  src/screens/Page404/__tests__/Page404.spec.tsx`
- Page 404 Screen
  - ✓ should render page 404 screen without any error (12 ms)
  - ✓ should display the page not found error message (3 ms)

`[PASS]  src/common/components/Shimmer/__tests__/Shimmer.spec.tsx`
- Shimmer Common Component
  - ✓ should render shimmer component (11 ms)

`[PASS]  src/common/components/Shimmer/__tests__/ShimmerItem.spec.tsx`
- Shimmer Common Component
  - ✓ should render shimmer items component (12 ms)
  - ✓ should reflect the marginBottom prop to shimmer items properly (15 ms)
  - ✓ should reflect the height prop to shimmer items properly (4 ms)
  - ✓ should reflect the width prop to shimmer items properly (3 ms)

`[PASS]  src/common/components/Icons/__tests__/Icons.spec.tsx`
- Icons Common Component
  - ✓ should render icons component (11 ms)
  - ✓ should icon component display icons (2 ms)

`[PASS]  src/features/Search/__tests__/searchAPI.spec.ts`
- Search Api
  - ✓ should return the data properly (10 ms)
  - ✓ should handle the error properly (6 ms)

`[PASS]  src/features/Search/__tests__/searchSlice.spec.ts`
- SearchSlide reducer
  - ✓ should handle initial state (1 ms)
  - ✓ should handle add keyword properly
  - ✓ should handle cancel keyword properly
  - ✓ should handle set show dropdown to true properly
  - ✓ should handle set show dropdown to false properly

`[PASS]  src/features/Search/SearchDropdown/SearchDropdownLoading/__tests__/SearchDropdownLoading.spec.tsx`
- Search Dropdown Loading Component
  - ✓ should render the component as expected (11 ms)


### Getting Started

1. Make sure you have a fresh version of [Node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed.

2. Clone this repository to your computer:

    ```sh
    git clone git@github.com:mustafa-cakir/react-assignment-debijenkorf.git
    ```

3. From the project's root directory, install the required packages (dependencies):

    ```sh
    yarn install
    ```

4. To run the app on your local machine (http://localhost:3000):

    ```sh
    # it will start a server instance on port 3000
    yarn start
    ```

5. To run the test watcher in an interactive mode:

    ```sh
    # By default, runs tests related to files changed since the last commit.
    yarn test
    ```

6. To build the app:

    ```sh
    # it will place all files needed for deployment into the /build directory
    yarn build
    ```
