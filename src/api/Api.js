import axios from "axios";

export const getThreads = async () => {
  try {
    const response = await axios.get("https://duzdino.domcloud.io/threads");
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getThreadById = async (uuid) => {
  try {
    const response = await axios.get(`https://duzdino.domcloud.io/threads/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getThreadsByUser = async () => {
  try {
    const response = await axios.get("https://duzdino.domcloud.io/user-threads/");
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getRepliesByUser = async () => {
  try {
    const response = await axios.get("https://duzdino.domcloud.io/user-replies/");
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getRepliesByThread = async (uuid) => {
  try {
    const response = await axios.get(`https://duzdino.domcloud.io/replies/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getReplies = async () => {
  try {
    const response = await axios.get("https://duzdino.domcloud.io/replies");
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAuth = async () => {
  try {
    const response = await axios.get("https://duzdino.domcloud.io/login");
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateUser = async (uuid, user) => {
  try {
    const response = await axios.patch(
      `https://duzdino.domcloud.io/users/${uuid}`,
      user
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await axios.post("https://duzdino.domcloud.io/users", user);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const createPost = async (thread) => {
  try {
    const response = await axios.post("https://duzdino.domcloud.io/threads", thread);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const updatePost = async (uuid, thread) => {
  try {
    const response = await axios.patch(
      `https://duzdino.domcloud.io/threads/${uuid}`,
      thread
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const deletePost = async (uuid) => {
  try {
    const response = await axios.delete(
      `https://duzdino.domcloud.io/threads/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const addReply = async (reply) => {
  try {
    const response = await axios.post("https://duzdino.domcloud.io/replies", reply);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const editReply = async (uuid, reply) => {
  try {
    const response = await axios.patch(
      `https://duzdino.domcloud.io/replies/${uuid}`,
      reply
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteReply = async (uuid) => {
  try {
    const response = await axios.delete(
      `https://duzdino.domcloud.io/replies/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};
