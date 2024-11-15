"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/library/components/buttons";
import { Input } from "@/library/components/input";

import { NotFoundContent } from "@/library/content/notfound.content";

export const NotFoundComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching) {
      const timer = setTimeout(() => {
        setIsSearching(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSearching]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-primaryVar via-secondaryBg to-primaryVar">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col items-center justify-center"
      >
        <h1 className="mb-4 text-9xl font-extrabold tracking-widest text-white">
          {NotFoundContent.title}
        </h1>
        <p className="mb-8 text-2xl font-semibold text-white md:text-3xl">
          {NotFoundContent.subTitle}
        </p>
        <p className="mb-8 text-lg text-white">{NotFoundContent.description}</p>
        <form
          onSubmit={handleSearch}
          className="mb-8 flex w-full max-w-md flex-col items-center justify-center space-y-4"
        >
          <Input
            type="text"
            placeholder="Search for content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/20 text-white placeholder-white/50"
          />
          <Button type="submit" variant="default" className="w-full">
            {isSearching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              "Search"
            )}
          </Button>
        </form>
        <Link href="/" passHref>
          <Button
            variant="outline"
            className="rounded-full bg-white px-8 py-3 text-primary hover:bg-secondary hover:text-white"
          >
            {NotFoundContent.back}
          </Button>
        </Link>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="absolute bottom-10 right-10 h-20 w-20 rounded-full bg-yellow-300"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="absolute left-10 top-10 h-16 w-16 rounded-full bg-green-300"
      />
    </main>
  );
}
