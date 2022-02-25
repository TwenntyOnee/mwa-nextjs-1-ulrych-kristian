import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}
