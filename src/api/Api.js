import axios from "axios";

export const getThreads = async () => {
  try {
    const response = await axios.get("https://cucwako.domcloud.io/threads");
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getThreadById = async (uuid) => {
  try {
    const response = await axios.get(`https://cucwako.domcloud.io/threads/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getThreadsByUser = async () => {
  try {
    const response = await axios.get("https://cucwako.domcloud.io/user-threads/");
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getRepliesByUser = async () => {
  try {
    const response = await axios.get("https://cucwako.domcloud.io/user-replies/");
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getRepliesByThread = async (uuid) => {
  try {
    const response = await axios.get(`https://cucwako.domcloud.io/replies/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getReplies = async () => {
  try {
    const response = await axios.get("https://cucwako.domcloud.io/replies");
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getAuth = async () => {
  try {
    const response = await axios.get("https://cucwako.domcloud.io/login");
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const updateUser = async (uuid, user) => {
  try {
    const response = await axios.patch(
      `https://cucwako.domcloud.io/users/${uuid}`,
      user
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await axios.post("https://cucwako.domcloud.io/users", user);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const createPost = async (thread) => {
  try {
    const response = await axios.post("https://cucwako.domcloud.io/threads", thread);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const updatePost = async (uuid, thread) => {
  try {
    const response = await axios.patch(
      `https://cucwako.domcloud.io/threads/${uuid}`,
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
      `https://cucwako.domcloud.io/threads/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const addReply = async (reply) => {
  try {
    const response = await axios.post("https://cucwako.domcloud.io/replies", reply);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const editReply = async (uuid, reply) => {
  try {
    const response = await axios.patch(
      `https://cucwako.domcloud.io/replies/${uuid}`,
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
      `https://cucwako.domcloud.io/replies/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};
