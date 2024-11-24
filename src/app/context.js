"use client";
import { createContext } from "react";

const SessionContext = createContext(null);

const PostContext = createContext({});

export { SessionContext, PostContext };
