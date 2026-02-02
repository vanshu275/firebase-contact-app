import Navbar from "./components/navbar";
import Search from "./components/Search";
import { useEffect, useState } from "react";

import { db } from "./config/firebase.config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const snapshot = await getDocs(contactRef);

        const contactList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("hello");
        console.log(contactList);

        setContacts(contactList);
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };

    fetchContacts(); // ✅ function ke bahar call
  }, []); // ✅ dependency array zaroori

  return (
    <div className="max-w-[460px] m-auto">
      <Navbar />
      <Search />

      <div className="contacts ">
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="contact">
              <div className="profile">
                <img src="vector 2.png" alt="" />
                <div className="text">
                  <h2>{contact.name}</h2>
                  <h2>{contact.email}</h2>
                </div>
              </div>
              <div className="options">
                <img src="edit.png" alt="" />
                <img src="trash.png" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
