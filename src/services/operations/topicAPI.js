import { toast } from "react-hot-toast";

import { apiConnector } from "../apiconnector";
import { topicEndpoints } from "../apis";

// import { useNavigate } from "react-router-dom";

const { CREATE_TOPIC_API,
    GET_ALL_DS_API,
    GET_ALL_ALGO_API,
    GET_TOPIC_BY_ID
 } = topicEndpoints;

export function createTopic(
    topicName, type, description
) {
   
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
   
    try {
      const response = await apiConnector("POST", CREATE_TOPIC_API, {
        topicName, type, description
      });

      console.log("TOPIC API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Topic Created Successfully");
    //   navigate("/dashboard/admin");
    } catch (error) {
      console.log("CREATE TOPIC API ERROR............", error);
    //   navigate("/signup");
      toast.error("Topic Creation Failed");
    }
    // dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export const getAllDataStructures = async (type) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_DS_API,{
      type
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch DS Topics")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_DS_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getAllAlgorithms = async (type) => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_ALGO_API,{
      type
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch ALGO Topics")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_ALGO_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const getTopicById = async (topicId) => {
    const toastId = toast.loading("Loading Topic Details...");
    try {
      const response = await apiConnector("POST", GET_TOPIC_BY_ID, { id: topicId });
      
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Topic Details");
      }
      
      return response.data.data;
    } catch (error) {
      console.log("GET_TOPIC_BY_ID ERROR............", error);
      toast.error("Error fetching topic details");
      throw error;
    } finally {
      toast.dismiss(toastId);
    }
  };