const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
   SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login"
  }

// TOPIC ENDPOINTS
export const topicEndpoints = {
  CREATE_TOPIC_API: BASE_URL + "/topic/createTopic",
  GET_ALL_DS_API: BASE_URL + "/topic/getAllDataStructures",
  GET_ALL_ALGO_API: BASE_URL + "/topic/getAllAlgorithms",
  GET_TOPIC_BY_ID: BASE_URL + "/topic/getTopic",
}

// PROGRAMMING QUESTION ENDPOINTS
export const programmingQuestionEndpoints = {
  CREATE_PROGRAMMING_QUESTION_API: BASE_URL + "/programmingQue/createProgrammingQue",
  GET_ALL_PROGRAMMING_QUESTION_API: BASE_URL + "/programmingQue/getAllProgrammingQues",
  GET_PROGRAMMING_QUESTION_BY_ID_API: BASE_URL + "/programmingQue/getProgrammingQue",
  UPDATE_PROGRAMMING_QUESTION_API: BASE_URL + "/programmingQue/updateProgrammingQue",
  DELETE_PROGRAMMING_QUESTION_API: BASE_URL + "/programmingQue/deleteProgrammingQue",
}
