import { useEffect, useState } from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Search = ({
  fetchContacts,
  searchText,
  setSearchText,
  editingContact,
  setEditingContact,
}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // when edit clicked → open modal + fill values
  useEffect(() => {
    if (editingContact) {
      setOpen(true);
      setName(editingContact.name);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const addcontact = () => {
    setEditingContact(null);
    setName("");
    setEmail("");
    setOpen(true);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Name & Email required");
      return;
    }

    try {
      if (editingContact) {
        // EDIT
        await updateDoc(doc(db, "contacts", editingContact.id), {
          name,
          email,
        });
      } else {
        // ADD
        await addDoc(collection(db, "contacts"), {
          name,
          email,
        });
      }

      setOpen(false);
      setName("");
      setEmail("");
      setEditingContact(null);
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white text-black p-4 rounded-md w-[300px]">
            <h2 className="text-lg font-semibold mb-3">
              {editingContact ? "Edit Contact" : "Add Contact"}
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 border"
                onClick={() => {
                  setOpen(false);
                  setEditingContact(null);
                }}
              >
                Cancel
              </button>

              <button
                className="px-3 py-1 bg-blue-500 text-white"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center gap-2 m-4">
        <div className="flex items-center grow border rounded-md px-2 gap-0.5 ">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 border-none outline-none"
            placeholder="Search contacts..."
          />
        </div>

        <button onClick={addcontact}>
          <img src="add.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default Search;
