import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./core/Signin";
import Signup from "./core/Signup";
import Home from "./core/Home.js";
import Courses from "./core/Course";
import Subject from "./core/Subject";
import Chapter from "./core/Chapter";
import Contents from "./core/Contents"
import intro from "./core/Introduction";
import Userdashboard from "./core/UserDashboard";
import Creator from "./creator/CreatorDashBoard";
import WritterCourse from "./creator/Course";
import WritterSubject from "./creator/Subject";
import WritterChapter from "./creator/Chapter";
import WritterCreateChapter from "./creator/CreateChapter";
import WritterUpdateChapter from "./creator/UpdateChapter";
import WritterIntro from "./creator/Intro";
import WritterContent from "./creator/Content";
import WritterCreateContent from "./creator/CreateContent";
import WritterUpdateContent from "./creator/UpdateContents";
import AdminRoute from "./masterauth/helper/AdminRoutes.js";
import PrivateRoute from "./masterauth/helper/PrivateRoutes.js";
import MasterSignin from "./mastersignin";
import Admin from "./admin/AdminDashBoard";
import CreatorRoute from "./masterauth/helper/CreatorRoutes.js";
import ManageUsers from "./admin/ManageUsers";
import ManageCreator from "./admin/ManageCreator";
import ManageFrenchaisee from "./admin/ManageFrenchaisee";
import CreateCourses from "./admin/CreateCourses";
import ManageCourses from "./admin/ManageCourses";
import UpdateCourse from "./admin/UpdateCourses";
import ManageSubjects from "./admin/ManageSubjects";
import CreateSubject from "./admin/CreateSubject";
import UpdateSubject from "./admin/UpdateSubjects";
import CreateChapter from "./admin/CreateChapter";
import ManageChapter from "./admin/ManageChapter";
import UpdateChapter from "./admin/UpdateChapter";
import ManageContent from "./admin/ManageContent";
import CreateContent from "./admin/CreateContent";
import UpdateContent from "./admin/UpdateContent";
import ManageIntro from "./admin/ManageIntro";
import ManageAdminVideo from "./admin/ManageVideo";
import ManageUserVideo from './core/videos';
import ManageWritterVideo from './creator/Video';
import ManageMyAccount from "./admin/ManageMyAccount";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>  

        <Route path="/" exact component={Home}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/courses" exact component={Courses}/>
        <PrivateRoute path="/manage/account/:userId" exact component={ManageMyAccount}/>
        <PrivateRoute path="/courses/:courseId/subject" exact component={Subject}/>
        <PrivateRoute path="/courses/:courseId/:subjectId/chapters" exact component={Chapter}/>
        <PrivateRoute path="/courses/:subjectId/:chapterId/chapter/introduction" exact component={intro}/>
        <PrivateRoute path="/courses/:subjectId/:chapterId/chapter/contents" exact component={Contents}/>
        <PrivateRoute path="/courses/:subjectId/:chapterId/videos" exact component={ManageUserVideo}/>
        <PrivateRoute path="/user/dashboard/courses" exact component={Userdashboard}/>

        <Route path="/manage/console/signin" exact component={MasterSignin}/>

        <CreatorRoute path="/manage/console/writter" exact component={Creator}/>
        <CreatorRoute path="/manage/writter/courses" exact component={WritterCourse}/>
        <CreatorRoute path="/manage/writter/:courseId/subjects" exact component={WritterSubject}/>
        <CreatorRoute path="/manage/writter/:courseId/:subjectId/chapters" exact component={WritterChapter}/>
        <CreatorRoute path="/manage/writter/:courseId/:subjectId/chapter/create" exact component={WritterCreateChapter}/>
        <CreatorRoute path="/manage/writter/:courseId/:subjectId/:chapterId/chapter/update" exact component={WritterUpdateChapter}/>
        <CreatorRoute path="/manage/writter/:subjectId/:chapterId/chapter/intro" exact component={WritterIntro}/>
        <CreatorRoute path="/manage/writter/:subjectId/:chapterId/contents" exact component={WritterContent}/>
        <CreatorRoute path="/manage/writter/:subjectId/:chapterId/content/create" exact component={WritterCreateContent}/>
        <CreatorRoute path="/manage/writter/:subjectId/:chapterId/:questionId/contents/update" exact component={WritterUpdateContent}/>
        <CreatorRoute path="/manage/writter/:subjectId/:chapterId/videos" exact component={ManageWritterVideo}/>
        
        <AdminRoute path="/manage/console/admin" exact component={Admin}/>
        <AdminRoute path="/manage/course/create" exact component={CreateCourses}/>
        <AdminRoute path="/manage/course/update/:courseId" exact component={UpdateCourse}/>
        <AdminRoute path="/manage/course" exact component={ManageCourses}/>
        <AdminRoute path="/manage/course/:courseId/subjects" exact component={ManageSubjects}/>
        <AdminRoute path="/manage/course/:courseId/subject/create" exact component={CreateSubject}/>
        <AdminRoute path="/manage/course/:courseId/subject/update/:subjectId" exact component={UpdateSubject}/>
        <AdminRoute path="/manage/:courseId/:subjectId/chapter/create" exact component={CreateChapter}/>
        <AdminRoute path="/manage/:courseId/:subjectId/chapter" exact component={ManageChapter}/>
        <AdminRoute path="/manage/:courseId/:subjectId/:chapterId/chapter/update" exact component={UpdateChapter}/>
        <AdminRoute path="/manage/:subjectId/:chapterId/contents/create" exact component={CreateContent}/>
        <AdminRoute path="/manage/:subjectId/:chapterId/contents" exact component={ManageContent}/>
        <AdminRoute path="/manage/:subjectId/:chapterId/:questionId/content/update" exact component={UpdateContent}/>
        <AdminRoute path="/manage/:subjectId/:chapterId/contents/intro" exact component={ManageIntro}/>
        <AdminRoute path="/manage/:subjectId/:chapterId/videos" exact component={ManageAdminVideo}/>
        
        <AdminRoute path="/manage/users" exact component={ManageUsers}/>
        <AdminRoute path="/manage/writter" exact component={ManageCreator}/>
        <AdminRoute path="/manage/frenchaisee" exact component={ManageFrenchaisee}/>

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
