import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`/api/message/${selectedConversation._id}`);
      
        
        if (res.data.Error) throw new Error(data.Error);

        setMessages(res.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if(selectedConversation?._id) getMessage();

  }, [selectedConversation?._id,setMessages]);
  return {loading,messages}
};

export default useGetMessage;
