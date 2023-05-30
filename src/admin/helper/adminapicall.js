import {API} from "../../backend";
import { SignUp } from "../../masterauth/helper";


// Create Course
export const createCourse = (userId, token, course) => {
    return fetch(`${API}/course-create/${userId}`,{
        method: "POST",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: course
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log("err"))
};

// Get all Courses
export const getAllCourse = () => {
    return fetch(`${API}/courses`,{
        method: "GET"
    }).then(response =>{
        return response.json()
    })
    .catch(err => console.log("err"))
}

// Get a Course
export const getCourse = courseId => {
    return fetch(`${API}/course-get/${courseId}`,{
        method: "GET"
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

// Delete a course
export const deleteCourse = (courseId, userId, token) => {
    return fetch(`${API}/course-delete/${courseId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

//Update a course
export const updateCourse = (courseId, userId, token, course) => {
  return fetch(`${API}/course-update/${courseId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: course
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

 // Create Subject
export const createPushSubjectToCourse = (userId, token, courseId, subject) => {
  return fetch(`${API}/course/subject-create/${userId}/${courseId}`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      },
      body: subject
  })
  .then(response => {
      return response.json()
  })
  .catch(err => console.log("err"))
};

// Get all Subjects
export const getAllSubjectByCourse = (userId, token, courseId) => {
  return fetch(`${API}/course/subjects/${userId}/${courseId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response =>{
      return response.json()
  })
  .catch(err => console.log("err"))
}

// Get a subject
export const getSubject = (userId, token, subjectId) => {
  return fetch(`${API}/course/subject-get/${userId}/${subjectId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

// Delete a subject
export const deleteSubject = (userId, token, courseId, subjectId) => {
  return fetch(`${API}/course/subject-delete/${userId}/${courseId}/${subjectId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Update a subject
export const updateSubject = (userId, token, subjectId, subject) => {
  return fetch(`${API}/course/subject-update/${userId}/${subjectId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: subject
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Create Chapter 
export const createPushChapterToSubject = (userId, token, subjectId, chapter) => {
  return fetch(`${API}/subject/chapter-add/${userId}/${subjectId}`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          "Content-type" : "application/json",
          Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(chapter)
  })
  .then(response => {
      return response.json()
  })
  .catch(err => console.log("err"))
};

//Get all Chapters
export const getAllChapterBySubject = (userId, token, subjectId) => {
  return fetch(`${API}/subject/chapters/${userId}/${subjectId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response =>{
      return response.json()
  })
  .catch(err => console.log("err"))
}

//Get a chapter
export const getChapter = (userId, token, chapterId) => {
  return fetch(`${API}/subject/chapter-get/${userId}/${chapterId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

//Update a chapter
export const updateChapter = (userId, token, chapterId, chapter) => {
  return fetch(`${API}/subject/chapter-update/${userId}/${chapterId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type" : "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(chapter)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Delete a chapter
export const deleteChapter = (userId, token, subjectId, chapterId) => {
  return fetch(`${API}/subject/chapter-del/${userId}/${subjectId}/${chapterId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Create Content
export const createPushQuestionToChapter = (userId, token, chapterId, question) => {
  return fetch(`${API}/subject/question-add/${userId}/${chapterId}`,{
      method: "POST",
      headers:{
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      },
      body: question
  })
  .then(response => {
      return response.json()
  })
  .catch(err => console.log("err"))
};

//get all content
export const getAllQuestionBySubject = (userId, token, chapterId) => {
  return fetch(`${API}/chapter/questions/${userId}/${chapterId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response =>{
      return response.json()
  })
  .catch(err => console.log("err"))
}

//get a content
export const getQuestion = (userId, token, questionId) => {
  return fetch(`${API}/chapter/question-get/${userId}/${questionId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    },
  }).then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

//Update a content
export const updateQuestion = (userId, token, questionId, question) => {
  return fetch(`${API}/chapter/question-update/${userId}/${questionId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: question
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Delete a content
export const deleteQuestion = (userId, token, chapterId, questionId) => {
  return fetch(`${API}/chapter/question-del/${userId}/${chapterId}/${questionId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//Create User
export const createUser = (userId, token, user) => {
  return fetch (`${API}/create/user/${userId}`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: user
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

//Get User
export const getUser = (userId, token) => {
  return fetch(`${API}/user/${userId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

//delete an user
export const delUser = (userId, token, trigeruserId) => {
  return fetch(`${API}/delete/user/${userId}/${trigeruserId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

//Get all Normal Users
export const getAllNormalUser = (userId, token) => {
  return fetch(`${API}/normal-user/users/${userId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

//Get all Writters
export const getAllContentWriter = (userId, token) => {
  return fetch(`${API}/content-writer/users/${userId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}

//Get All Frenchaisee
export const getAllFrinchaiseeUser = (userId, token) => {
  return fetch(`${API}/frinchaisee-user/users/${userId}`,{
      method: "GET",
      headers:{
        Accept: "application/json",
        "Content-type" : "application/json",
        Authorization: `Bearer ${token}`
    },
  })
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err));
}



//Update User
export const updateUser = (userId, token, user) => {
  return fetch(`${API}/update/user/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type" : "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


//Make Payment
export const addMyCourse = (userId, token, courseId, Payment) => {
  return fetch (`${API}/my-course-add/user/${userId}/${courseId}`,{
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(Payment)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
}

//Update Myself
// export const UpdateAppUser = (user, token) => {
//   return fetch(`${API}/update/user/${user._id}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify(user)
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };


