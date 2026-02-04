import Navbar from "./components/navbar";
import Search from "./components/Search";
import { useEffect, useState } from "react";

import { db } from "./config/firebase.config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editingContact, setEditingContact] = useState(null);

  // filter
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // FETCH
  const fetchContacts = async () => {
    const contactRef = collection(db, "contacts");
    const snapshot = await getDocs(contactRef);

    const contactList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setContacts(contactList);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // DELETE
  const deleteContact = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
    fetchContacts();
  };

  // EDIT CLICK
  const edit = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="max-w-[460px] m-auto">
      <Navbar />

      <Search
        fetchContacts={fetchContacts}
        searchText={searchText}
        setSearchText={setSearchText}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <div className="contacts">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="contact">
            <div className="profile">
              <img src="/vector 2.png" alt="" />
              <div className="text">
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
              </div>
            </div>

            <div className="options">
              <button onClick={() => edit(contact)}>
                <img src="/edit.png" alt="" />
              </button>

              <button onClick={() => deleteContact(contact.id)}>
                <img src="/trash.png" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
