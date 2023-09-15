import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './AdminShowData.scss'
import { createClient } from '@supabase/supabase-js'

// Programmer Name: Daniel Mikhail, BSc(Hons) Software Engineering, TP061667, APD3F2211SE
// Program Name: AdminShowData.js
// Description:  show the data that admin only can see
// First Written on: 15 july 2023
// Edited on: 19 july 2023

const supabaseUrl = 'https://quwznecsiavvcloionxg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d3puZWNzaWF2dmNsb2lvbnhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MzQ5MzEsImV4cCI6MjAwMzAxMDkzMX0.2L23lZ-9FsQ5XEQoCuTEzTN2OjqVfk5CUycTQ_FFe8M'
export const supabase = createClient(supabaseUrl, supabaseKey)

const AdminShowData = () => {
    const [data, setData] = useState(null);
    const [fetchError,setFetchError] = useState(null)
    

    useEffect(() => {
      fetchData();
    }, []);

  const fetchData = async () => {
    try {
      // Fetch data from Supabase
      const { data: users, error } = await supabase
        .from("users")
        .select();

      if (error) {
        console.error("Error fetching data:", error);
        setFetchError("Error fetching data");
        return;
      }

      setData(users);
      setFetchError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFetchError("Error fetching data");
    }
  };

  return (
    <div className="background">
      <h1 className="users-data">Users Data</h1>
      {fetchError ? (
        <p>{fetchError}</p>
      ) : (
        <table className="table">
          <thead >
          <tr className="row header-row">
              <th className="row header-cell">Username</th>
              <th className="row header-cell">Email</th>
              <th className="row header-cell">Rate</th>
              <th className="row header-cell">Feedback</th>
              <th className="row header-cell">User Type</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((user, index) => (
                <tr key={index} className="row data-row">
                  <td className="row data-cell">{user.username}</td>
                  <td className="row data-cell">{user.email}</td>
                  <td className="row data-cell">{user.rating}</td>
                  <td className="row data-cell">{user.feedback}</td>
                  <td className="row data-cell">{user.user_type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <br />
    <Link className="back-btn text-black" to="/">
        Back
    </Link>
    </div>

  );
};
    

  export default AdminShowData;
  