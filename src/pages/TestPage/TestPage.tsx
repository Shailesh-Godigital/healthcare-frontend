import {
  Header,
  FAQ,
  Footer,
} from "@/components";
import TestIntro from "@/components/TestIntro/TestIntro";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TestPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const apiUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api/v1/mainPackage/${id}`;
        const response = await axios.get(apiUrl);
        console.log("API Response:", response.data);
        setData(response.data);
        setLoading(false); // Set loading to false after successful fetch
      } catch (error) {
        console.error("Error fetching package:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchPackage();
  }, [id]);

  return (
    <div>
      <Header />


      {loading ? (
        <p>Loading...</p>
      ) : (
        <TestIntro dataPackage={data} />
      )}

      <FAQ />
      <Footer />
    </div>
  );
}

