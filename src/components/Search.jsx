import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Search = ({ fetchContacts, searchText, setSearchText }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addcontact = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Name & Email required");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
      });

      setName("");
      setEmail("");
      setOpen(false);
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact", error);
    }
  };

  return (
    <>
      {/* // this is modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white text-black p-4 rounded-md w-[300px]">
            <h2 className="text-lg font-semibold mb-3">Add Contact</h2>

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
                onClick={() => setOpen(false)}
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

      {/* // this is search component */}
      <div className="flex justify-center items-center gap-2 m-4">
        <div className="flex items-center grow border rounded-md px-2 gap-0.5 ">
          <img src="search.png" alt="" />
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
