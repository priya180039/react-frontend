import axios from "axios";

export const getThreads = async () => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/threads`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getThreadById = async (uuid) => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/threads/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getThreadsByUser = async () => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/user-threads/`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getRepliesByUser = async () => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/user-replies/`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getRepliesByThread = async (uuid) => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/replies/${uuid}`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getReplies = async () => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/replies`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const getAuth = async () => {
  try {
    const response = await axios.get(`https://cleauve3.domcloud.dev/login`);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const updateUser = async (uuid, user) => {
  try {
    const response = await axios.patch(
      `https://cleauve3.domcloud.dev/users/${uuid}`,
      user
    );
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`https://cleauve3.domcloud.dev/users`, user);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const createPost = async (thread) => {
  try {
    const response = await axios.post(`https://cleauve3.domcloud.dev/threads`, thread);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const updatePost = async (uuid, thread) => {
  try {
    const response = await axios.patch(
      `https://cleauve3.domcloud.dev/threads/${uuid}`,
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
      `https://cleauve3.domcloud.dev/threads/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const addReply = async (reply) => {
  try {
    const response = await axios.post(`https://cleauve3.domcloud.dev/replies`, reply);
    return response;
  } catch (err) {
    return err.response.data;
  }
};

export const editReply = async (uuid, reply) => {
  try {
    const response = await axios.patch(
      `https://cleauve3.domcloud.dev/replies/${uuid}`,
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
      `https://cleauve3.domcloud.dev/replies/${uuid}`
    );
    return response;
  } catch (err) {
    return err.response.data;
  }
};
