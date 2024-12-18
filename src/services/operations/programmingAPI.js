import { toast } from "react-hot-toast";

import { apiConnector } from "../apiconnector";
import { programmingQuestionEndpoints } from "../apis";

const {
  CREATE_PROGRAMMING_QUESTION_API,
  GET_ALL_PROGRAMMING_QUESTION_API,
  GET_PROGRAMMING_QUESTION_BY_ID_API,
  UPDATE_PROGRAMMING_QUESTION_API,
  DELETE_PROGRAMMING_QUESTION_API,
} = programmingQuestionEndpoints;

export const createProgrammingQuestion = async (
data
) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", CREATE_PROGRAMMING_QUESTION_API, data)
      console.log("CREATE PROGRAMMING QUESTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Add Programming Question")
      }
      toast.success("Programming Question Added")
      result = response?.data?.data
    } catch (error) {
      console.log("CREATE PROGRAMMING QUESTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }

export const getProgrammingQue = async (programmingQueId) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "GET", 
      `${GET_PROGRAMMING_QUESTION_BY_ID_API}/${programmingQueId}`
    );
    
    console.log("GET PROGRAMMING QUESTION BY ID API RESPONSE............", response);
    
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Programming Question");
    }
    
    result = response?.data?.programmingQue;
  } catch (error) {
    console.log("GET PROGRAMMING QUESTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const getAllProgrammingQues = async () => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("GET", GET_ALL_PROGRAMMING_QUESTION_API);
    console.log("GET ALL PROGRAMMING QUESTIONS API RESPONSE............", response);
    
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Programming Questions");
    }
    
    result = response?.data?.programmingQues;
  } catch (error) {
    console.log("GET ALL PROGRAMMING QUESTIONS API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};