import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "../pages/users/homePage";
import Novel from "../pages/users/NovelPage/Novel";
import ReadingNovel from "../pages/users/ReadingNovel/ReadingNovel";
import TypesPage from "../pages/users/typesPage";
import ChartPage from "../pages/users/chartPage";
import ListChart from "../pages/users/chartPage/ListChart/ListChart";

const Router = () => {
  const accountID = sessionStorage.getItem("accID") || "" ;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage accountID={accountID} />} />
        <Route path="home" element={<HomePage accountID={accountID} />} />
        <Route path="novel/:id" element={<Novel accountID={accountID} />} />
        <Route
          path="novel/chapter/:id"
          element={<ReadingNovel accountID={accountID} />}
        />

        <Route path="types" element={<TypesPage />} />
        <Route path="charts" element={<ChartPage />}>
          <Route path="trend" element={<ListChart />} />
          <Route path="read" element={<ListChart />} />
          <Route path="like" element={<ListChart />} />
          <Route path="bookmark" element={<ListChart />} />
        </Route>


        {/* <Route
          path="post-novel/"
          element={<PostNovel accountID={accountID} />}
        >
          <Route path="profile" element={<InfoAuth />} />
          <Route path="post-new-novel" element={<NewNovel accountID={accountID} />} />
          <Route path="mynovel" element={<MyNovel />}>
            <Route path=":id" element={<EditNovel accountID={accountID} />}>
              <Route path="chapter/:id" element={<EdiChaptertModel />} />
              <Route path="chapter/add" element={<EdiChaptertModel />} />
            </Route>
          </Route>
          <Route path="message" element={<MessageAuth />} />
          <Route path="money" element={<WithdrawMoney />} />
        </Route> */}

        {/* <Route path="login" element={<Loginmobile />} />
        <Route path="logout" element={<Logout />} /> */}
       
        {/* <Route
          path="/bookings/:id"
          element={<ProtectedRoute Component={BookingDetails} />}
        /> */}

        {/* <Route
          path="/vnpay/return"
          element={<ProtectedRoute Component={PaymentResult} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
