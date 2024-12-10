import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

export const Network = () => {
  const [userName, setUserName] = useState(null);
  const [users, setUsers] = useState([]);
  const [nameToSearch, setNameToSearch] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [idToText, setIdToText] = useState('');
  const [nameTexting, setNameTexting] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [randomUsers, setRandomUsers] = useState([]);

  useEffect(() => {
    const fetchUserDetailsAndUsers = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (token && userId) {
        try {
          const userResponse = await axios.get(
            `http://localhost:5000/api/auth/profile/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserName(userResponse.data.user.name);

          const usersResponse = await axios.get(
            `http://localhost:5000/api/auth/users/except/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          const usersWithImages = usersResponse.data.users.map((user) => ({
            ...user,
            image: `https://randomuser.me/api/portraits/lego/${Math.floor(
              Math.random() * 10
            )}.jpg`,
          }));

          setUsers(usersWithImages);

          const shuffledUsers = usersWithImages.sort(() => 0.5 - Math.random());
          setRandomUsers(shuffledUsers.slice(0, 5));
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      }
    };

    fetchUserDetailsAndUsers();
  }, []);

  const fetchConversation = async (idToText) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      setSelectedConversation('');
      const response = await axios.get(
        `http://localhost:5000/api/convo/getConvo/${userId}?user2Id=${idToText}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedConversation(response.data);
    } catch (error) {
      console.error('Failed to fetch conversation:', error);
    }
  };

  const startConversation = async (user2Id, userName) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      const response = await axios.post(
        `http://localhost:5000/api/convo/createConvo/${userId}/${user2Id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSelectedConversation(response.data);
      setIdToText(user2Id);
      setNameTexting(userName);
    } catch (error) {
      console.error('Failed to create conversation:', error);
    }
  };

  const sendMessage = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (newMessage.trim() && selectedConversation) {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/convo/addMessage/${userId}/${idToText}`,
          {
            senderId: userId,
            receiverId: idToText,
            content: newMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSelectedConversation((prev) => ({
          ...prev,
          messages: [...prev.messages, response.data],
        }));
        setNewMessage('');
        const response2 = await axios.get(
          `http://localhost:5000/api/convo/getConvo/${userId}?user2Id=${idToText}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ); 
        setSelectedConversation(response2.data);
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full px-2 py-6 flex bg-[#C8B1E4] justify-between items-start min-h-full">
        <div className="flex flex-col gap-4 justify-start items-center">
          {/* User Profile */}
          <div className="w-64 border border-gray-300 rounded-lg shadow-sm bg-white">
            <div className="bg-gradient-to-r from-purple-800 to-purple-900 h-16 rounded-t-lg relative">
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <img
                  src="https://via.placeholder.com/64"
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>
            </div>
            <div className="pt-10 pb-4 px-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">{userName}</h3>
              <p className="text-sm text-gray-600">
                ICT engineering student at SUP'COM
              </p>
              <p className="text-sm text-gray-500 mt-1">Gouvernorat Monastir</p>
            </div>
          </div>

          {/* Contact List */}
          <div className="w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold rounded-t-lg bg-gradient-to-r from-purple-800 to-purple-900 text-white border-b border-gray-200 p-4">
              Contacts
            </h2>
            <input
              type="text"
              placeholder="Search for a teacher!"
              value={nameToSearch}
              onChange={(e) => setNameToSearch(e.target.value)}
              className="shadow-lg rounded-lg w-[95%] px-3 py-2 my-2"
            />
            <div className="flex flex-col justify-start items-start">
              {nameToSearch &&
                users
                  .filter((user) =>
                    user.name.toLowerCase().includes(nameToSearch.toLowerCase())
                  )
                  .map((filteredUser) => (
                    <div
                      key={filteredUser._id}
                      className="w-full p-4 hover:bg-gray-100 border-b last:border-b-0 cursor-pointer"
                      onClick={() => {
                        fetchConversation(filteredUser._id);
                        setIdToText(filteredUser._id);
                        setNameTexting(filteredUser.name);
                      }}
                    >
                      <h3 className="text-sm font-bold text-gray-800">
                        {filteredUser.name}
                      </h3>
                      <img
                        src={filteredUser.image}
                        alt={filteredUser.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="text-sm text-gray-600">
                        {filteredUser.email}
                      </p>
                      <p className="text-sm text-gray-600">
                        {filteredUser.teacherDetails?.institution ||
                          'No institution provided'}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Conversation Section */}
        <div className="w-[55%] rounded-lg bg-white min-h-screen p-4 flex flex-col">
          <h3 className="text-lg font-bold">Conversation</h3>
          <div className="flex-1 overflow-y-auto">
            {selectedConversation ? (
              <ul>
                {selectedConversation.messages.map((message, index) => (
                  <li
                    key={index}
                    className={`p-2 border-b ${
                      message.senderId === localStorage.getItem('userId')
                        ? 'text-right bg-blue-100'
                        : 'text-left bg-gray-100'
                    }`}
                  >
                    <strong>
                      {message.senderId === localStorage.getItem('userId')
                        ? 'You'
                        : nameTexting}
                    </strong>
                    : {message.content}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                Select a user to view the conversation.
              </p>
            )}
          </div>
          {selectedConversation && (
            <div className="mt-4 flex items-center">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              />
              <button
                onClick={sendMessage}
                className="bg-purple-800 text-white p-2 rounded-r-lg"
              >
                Send
              </button>
            </div>
          )}
        </div>

        {/* Random Users Section */}
        <div className="w-80 border border-gray-300 rounded-xl bg-white">
          <h3 className="text-lg font-semibold p-3 rounded-t-lg bg-gradient-to-r from-purple-800 to-purple-900 text-white mb-4">
            Ajoutez à votre fil d’actualité
          </h3>
          <ul>
            {randomUsers.map((user) => (
              <li
                key={user._id}
                className="p-2 border-b flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-800">{user.name}</span>
                </div>
                <button
                  onClick={() => startConversation(user._id, user.name)}
                  className="bg-purple-800 text-white px-2 py-1 rounded text-xs"
                >
                  Start Conversation
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};
