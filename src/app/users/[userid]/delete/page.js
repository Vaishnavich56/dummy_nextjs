"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function DeleteUser() {
  const { userid } = useParams(); // dynamic route param from URL
  const router = useRouter();

  useEffect(() => {
    const deleteUser = async () => {
      try {
        const resp = await fetch(`http://10.193.173.250:3000/api/users/${userid}`, {
          method: "DELETE",
        });

        const data = await resp.json();
        console.log("Deleted:", data);

        // Redirect after deletion
        router.push("/users"); // Or wherever you want to go
      } catch (err) {
        console.error("Delete failed:", err);
      }
    };

    if (userid) {
      deleteUser(); // Call it once
    }
  }, [userid, router]);

  return <p>Deleting user...</p>;
}
